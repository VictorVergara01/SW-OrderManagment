from flask_script import Manager
from app import create_app, db

# Crea una instancia de la aplicación utilizando la función create_app del paquete app
app = create_app()

# Crea una instancia del administrador para gestionar comandos
manager = Manager(app)

# Comando para crear la base de datos
@manager.command
def create_db():
    db.create_all()

# Comando para eliminar la base de datos
@manager.command
def drop_db():
    db.drop_all()

if __name__ == '__main__':
    manager.run()
