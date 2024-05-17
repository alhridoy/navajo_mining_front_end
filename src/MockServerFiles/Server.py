# import json
# from http.server import HTTPServer, SimpleHTTPRequestHandler, test
# import sys

# # Load the JSON data
# with open('simulated_data.json', 'r') as f:
#     data = json.load(f)

# class CORSRequestHandler(SimpleHTTPRequestHandler):
#     def end_headers(self):
#         self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
#         self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # Allow specific methods
#         self.send_header('Access-Control-Allow-Headers', 'X-Requested-With')  # Allow specific headers
#         SimpleHTTPRequestHandler.end_headers(self)

#     def do_GET(self):
#         if self.path == '/simulated_data.json':
#             self.send_response(200)
#             self.send_header('Content-Type', 'application/json')
#             self.end_headers()
#             self.wfile.write(json.dumps(data).encode())
#         elif self.path == '/testtiff.tif':
#             with open('testtiff.tif', 'rb') as f:
#                 self.send_response(200)
#                 self.send_header('Content-Type', 'image/tiff')
#                 self.end_headers()
#                 self.wfile.write(f.read())
#         else:
#             SimpleHTTPRequestHandler.do_GET(self)

# if __name__ == '__main__':
#     test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)

import json
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # Allow specific methods
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With')  # Allow specific headers
        SimpleHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        if self.path == '/Day1.geojson':
            self.serve_geojson_file('Day1.geojson')
        elif self.path == '/Day2.geojson':
            self.serve_geojson_file('Day2.geojson')
        elif self.path == '/Day3.geojson':
            self.serve_geojson_file('Day3.geojson')
        elif self.path == '/Day4.geojson':
            self.serve_geojson_file('Day4.geojson')
        elif self.path == '/Day5.geojson':
            self.serve_geojson_file('Day5.geojson')
        elif self.path == '/Day6.geojson':
            self.serve_geojson_file('Day6.geojson')
        elif self.path == '/Day7.geojson':
            self.serve_geojson_file('Day7.geojson')
        else:
            SimpleHTTPRequestHandler.do_GET(self)

    def serve_geojson_file(self, filename):
        try:
            with open(filename, 'r') as f:
                geojson_data = json.load(f)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(geojson_data).encode())
        except FileNotFoundError:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'File not found')

if __name__ == '__main__':
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)