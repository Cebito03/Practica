import json
from http.server import BaseHTTPRequestHandler, HTTPServer

datos = [
    {"id": 1, "nombre": "Damian", "descripcion": "Damian trabaja en softtek"},
    {"id": 2, "nombre": "Jaider", "descripcion": "Jaider es un buen maestro"},
    {"id": 3, "nombre": "Adrian", "descripcion": "Adrian es MOMENTUM"},
]

class PedirDom(BaseHTTPRequestHandler):
    def metodoGet(self):
        if self.path == '/api/datos':
            self.send_response(200)
            self.wfile.write(json.dumps(datos).encode())
        else:
            self.send_response(400)
            self.wfile.write(json.dumps({"error":"No encontrado"}).encode())

def CorrerServ(server=HTTPServer, referencia=PedirDom, port=5500):
    direccion = ('', port)
    domHt = server(direccion, referencia)
    print(f"Servidor: http://127.0.0.1/:{port}")
    domHt.serve_forever()

if __name__ == "__main__":
    CorrerServ()


