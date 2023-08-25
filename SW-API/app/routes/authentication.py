from flask import jsonify, request, Blueprint
from app.models import Usuarios, db
from flask_jwt_extended import create_access_token
from sqlalchemy.exc import SQLAlchemyError

authentication_bp = Blueprint('authentication', __name__)


@authentication_bp.route('/api/login', methods=['POST'])
def login():
    correo = request.json['correo']
    password = request.json['password']

    user, token = authenticate(correo, password)  # Llama a authenticate

    if user is None:
        return jsonify({"error": "Credenciales inválidas"}), 401

    user_data = {  # Crea un diccionario con los datos del usuario
        "idUsuario": user.idUsuario,
        "nombre": user.nombre,
        "apellido": user.apellido,
        "correo": user.correo,
        "telefono": user.telefono,
        "tipo": user.tipo,
        "tienda": user.tienda,
        "fecha_registro": user.fecha_registro.strftime('%Y-%m-%d')
    }

    return jsonify({"mensaje": "Inicio de sesión exitoso", "token": token, "user": user_data})

# Otras rutas y funciones relacionadas con autenticación
def authenticate(correo, password):
    try:
        user = Usuarios.query.filter_by(correo=correo).first()
        if user and user.password == password:
            token = create_access_token(identity=user.idUsuario)
            return user, token
        else:
            return None, None
    except SQLAlchemyError:
        db.session.rollback()
        return None, None
