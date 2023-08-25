from flask import Blueprint, jsonify
from app.models import Solicitudes, Entregas, db
from flask_jwt_extended import jwt_required, get_jwt_identity


repartidor_bp = Blueprint('repartidor', __name__)

@repartidor_bp.route('/api/repartidor/entregas', methods=['GET'])
@jwt_required()
def listar_entregas():
    # Aquí debes implementar la lógica para obtener y devolver las entregas asignadas al repartidor

    # Obtenemos el ID del repartidor desde el token (o de alguna otra manera)
    id_repartidor = get_jwt_identity()

    # Buscamos las entregas asignadas al repartidor en base a su ID
    entregas = Entregas.query.filter_by(idChofer=id_repartidor).all()

    # Construimos una lista de diccionarios con la información que deseas mostrar
    entregas_data = []
    for entrega in entregas:
        solicitud = Solicitudes.query.get(entrega.idSolicitud)
        cliente_nombre = solicitud.cliente if solicitud else None

        entrega_data = {
            "idEntrega": entrega.idEntrega,
            "cliente": cliente_nombre,
            "estado": entrega.estado
        }
        entregas_data.append(entrega_data)

    return jsonify({"entregas": entregas_data})

@repartidor_bp.route('/api/repartidor/en-camino/<int:id_entrega>', methods=['PUT'])
def marcar_en_camino(id_entrega):
    # Aquí debes implementar la lógica para actualizar el estado de la entrega a "en camino"
    entrega = Entregas.query.get(id_entrega)
    if entrega is None:
        return jsonify({"error": "Entrega no encontrada"}), 404

    entrega.estado = 'en camino'
    db.session.commit()

    return jsonify({"mensaje": "Entrega marcada como en camino"})



@repartidor_bp.route('/api/repartidor/completar-entrega/<int:id_entrega>', methods=['PUT'])
def completar_entrega(id_entrega):
    # Aquí debes implementar la lógica para actualizar el estado de la entrega a "completada"
    entrega = Entregas.query.get(id_entrega)
    if entrega is None:
        return jsonify({"error": "Entrega no encontrada"}), 404

    entrega.estado = 'completada'
    db.session.commit()

    return jsonify({"mensaje": "Entrega marcada como completada"})

