from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
#from flask.ext.jsonpify import jsonify

app = Flask(__name__)
api = Api(app)


#Creamos la clase que vamos a consumir
class TestClass(Resource):
    def get(self):
        return (print("hola mundo!"))

#Creamos los recursos que le vamos a pegar
api.add_resource(TestClass, '/test')

if __name__ == '__main__':
    app.run(port='8123')