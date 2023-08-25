from flask import Blueprint, jsonify, request
from app.models import Solicitudes, db, Entregas, Usuarios

admin_bp = Blueprint('admin', __name__)


@admin_bp.route('/api/admin/solicitudes', methods=['GET'])
# Aquí debes implementar la lógica para obtener y devolver las solicitudes
def listar_solicitudes():
    solicitudes = Solicitudes.query.all()
    solicitudes_json = [
        {
            'idSolicitud': solicitud.idSolicitud,
            'vendedor': solicitud.vendedor,
            'fecha_entrega': solicitud.fecha_entrega,
            'lugar': solicitud.lugar,
            'nombre_recibe': solicitud.nombre_recibe,
            'telefono_recibe': solicitud.telefono_recibe,
            'cantidad_tanques': solicitud.cantidad_tanques,
            'cantidad_galones': solicitud.cantidad_galones,
            'cantidad_cuartos': solicitud.cantidad_cuartos,
            'cantidad_otros': solicitud.cantidad_otros,
            'fecha_solicitud': solicitud.fecha_solicitud,
            'cliente_credito': solicitud.cliente_credito,
            'origen_producto': solicitud.origen_producto,
            'preparacion': solicitud.preparacion,
            'idRTV': solicitud.idRTV,
            'idSolicitante': solicitud.idSolicitante,
            'Estado': solicitud.Estado
        }
        for solicitud in solicitudes
    ]
    return jsonify(solicitudes_json)


@admin_bp.route('/api/admin/aceptar-rechazar/<int:id_solicitud>', methods=['PUT'])
# Aquí debes implementar la lógica para aceptar o rechazar la solicitud
def aceptar_rechazar_solicitud(id_solicitud):
    solicitud = Solicitudes.query.get(id_solicitud)
    if solicitud is None:
        return jsonify({'error': 'Solicitud no encontrada'}), 404

    data = request.json
    if 'accion' in data:
        accion = data['accion']
        if accion == 'aceptar':
            solicitud.Estado = 'Aceptado'
            entrega = Entregas(
                idSolicitud=solicitud.idEntrega, estado='En espera de repartidor')
            db.session.add(entrega)
            db.session.commit()
            return jsonify({'mensaje': 'Solicitud aceptada y agregada a Entregas'})
        elif accion == 'rechazar':
            solicitud.Estado = 'Rechazado'
            db.session.commit()
            return jsonify({'mensaje': 'Solicitud rechazada exitosamente'})
        else:
            return jsonify({'error': 'Acción no válida'}), 400
    else:
        return jsonify({'error': 'Falta el campo "accion" en el JSON'}), 400


@admin_bp.route('/api/admin/asignar-o-editar-entrega/<int:idSolicitud_or_idEntrega>/repartidor/<int:idNuevoChofer>', methods=['PUT'])
def asignar_o_editar_entrega(idSolicitud_or_idEntrega, idNuevoChofer):
    solicitud_o_entrega = Solicitudes.query.get(idSolicitud_or_idEntrega) or Entregas.query.get(idSolicitud_or_idEntrega)

    if solicitud_o_entrega is None:
        return jsonify({'error': 'Solicitud o entrega no encontrada'}), 404

    nuevo_chofer = Usuarios.query.get(idNuevoChofer)
    if nuevo_chofer is None:
        return jsonify({'error': 'Nuevo repartidor no encontrado'}), 404

    if nuevo_chofer.tipo != 'repartidor':
        return jsonify({'error': 'El usuario seleccionado no es de tipo "repartidor"'}), 400

    if isinstance(solicitud_o_entrega, Solicitudes):
        entrega_existente = Entregas.query.filter_by(idSolicitud=solicitud_o_entrega.idSolicitud).first()
        if entrega_existente:
            entrega_existente.idChofer = nuevo_chofer.idUsuario
            entrega_existente.estado = 'pendiente'
            db.session.commit()
            return jsonify({'mensaje': f'Repartidor de la entrega actualizado a {nuevo_chofer.nombre} {nuevo_chofer.apellido}'})

        return jsonify({'error': 'No se encontró una entrega asociada a esta solicitud'}), 400
    
    else:  # Es una Entrega existente
        solicitud_o_entrega.idChofer = nuevo_chofer.idUsuario
        solicitud_o_entrega.estado = 'pendiente'
        db.session.commit()
        return jsonify({'mensaje': f'Repartidor de la entrega actualizado a {nuevo_chofer.nombre} {nuevo_chofer.apellido}'})






@admin_bp.route('/api/admin/repartidores', methods=['GET'])
def get_repartidores():
    try:
        repartidores = Usuarios.query.filter_by(tipo='repartidor').all()
        repartidores_data = []

        for repartidor in repartidores:
            repartidor_info = {
                'idUsuario': repartidor.idUsuario,
                'nombre': repartidor.nombre,
                'apellido': repartidor.apellido
                # Agrega más atributos según sea necesario
            }
            repartidores_data.append(repartidor_info)

        return jsonify(repartidores_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@admin_bp.route('/api/admin/detalles-entrega/<int:idSolicitud>', methods=['GET'])
def detalles_entrega(idSolicitud):
    solicitud = Solicitudes.query.get(idSolicitud)
    if solicitud is None:
        return jsonify({'error': 'Solicitud no encontrada'}), 404

    entrega = Entregas.query.filter_by(idSolicitud=idSolicitud).first()
    if entrega is None:
        return jsonify({'error': 'Entrega no encontrada'}), 404

    repartidor = Usuarios.query.get(entrega.idChofer)
    if repartidor is None:
        return jsonify({'error': 'Repartidor no encontrado'}), 404

    solicitante = Usuarios.query.get(solicitud.idSolicitante)
    if solicitante is None:
        return jsonify({'error': 'Solicitante no encontrado'}), 404

    return jsonify({
        'repartidor': {
            'nombre': repartidor.nombre,
            'apellido': repartidor.apellido,
            'idUsuario': repartidor.idUsuario
        },
        'solicitante': {
            'nombre': solicitante.nombre,
            'apellido': solicitante.apellido,
            'idUsuario': solicitante.idUsuario
        },
        'solicitud': {
            'tanques': solicitud.cantidad_tanques,
            'galones': solicitud.cantidad_galones,
            'tienda': solicitud.origen_producto,
            'cliente': solicitud.cliente

        },
        'lugar': solicitud.lugar,
        'estado': entrega.estado
    })
