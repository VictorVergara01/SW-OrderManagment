# app/__init__.py
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secreto'
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:0401@localhost:3306/OrderManagement'

# Inicializa la extensión SQLAlchemy solo una vez
db = SQLAlchemy(app)

jwt = JWTManager(app)

# Importa los modelos después de inicializar db
from app.models import Usuarios, Entregas, Solicitudes

# Importa las rutas después de inicializar db
from app.routes import admin, vendedor, repartidor, authentication

app.register_blueprint(vendedor.vendedor_bp)
app.register_blueprint(admin.admin_bp)
app.register_blueprint(repartidor.repartidor_bp)
app.register_blueprint(authentication.authentication_bp)

