from flask import Blueprint

bp = Blueprint('main', __name__)

# Importa y registra las rutas de los otros archivos aquí
from . import admin, vendedor, repartidor, authentication
