from app import db

class Usuarios(db.Model):
    idUsuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    correo = db.Column(db.String(100))
    password = db.Column(db.String(100))
    telefono = db.Column(db.String(20))
    tipo = db.Column(db.String(20))
    tienda = db.Column(db.String(50))
    fecha_registro = db.Column(db.Date)

    def serialize(self):
        return {
            'idUsuario': self.idUsuario,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'correo': self.correo,
            'telefono': self.telefono,
            'tipo': self.tipo,
            'tienda': self.tienda,
            'fecha_registro': self.fecha_registro.strftime('%Y-%m-%d') if self.fecha_registro else None
        }

class Entregas(db.Model):
    idEntrega = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idSolicitud = db.Column(db.Integer, db.ForeignKey('solicitudes.idSolicitud'))
    estado = db.Column(db.String(50))
    idChofer = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))

class Solicitudes(db.Model):
    idSolicitud = db.Column(db.Integer, primary_key=True, autoincrement=True)
    vendedor = db.Column(db.String(100))
    fecha_entrega = db.Column(db.Date)
    lugar = db.Column(db.String(100))
    nombre_recibe = db.Column(db.String(100))
    telefono_recibe = db.Column(db.String(20))
    cantidad_tanques = db.Column(db.Integer)
    cantidad_galones = db.Column(db.Integer)
    cantidad_cuartos = db.Column(db.Integer)
    cantidad_otros = db.Column(db.Integer)
    fecha_solicitud = db.Column(db.Date)
    cliente_credito = db.Column(db.Boolean)
    origen_producto = db.Column(db.String(50))
    preparacion = db.Column(db.Boolean)
    idRTV = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))
    idSolicitante = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))
    Estado = db.Column(db.String(50))
