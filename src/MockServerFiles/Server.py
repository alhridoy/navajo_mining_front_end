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
        if self.path == '/drain1.geojson':
            self.serve_geojson_file('drain1.geojson')

        if self.path == '/drain2.geojson':
            self.serve_geojson_file('drain2.geojson')

        if self.path == '/drain3.geojson':
            self.serve_geojson_file('drain3.geojson')

        if self.path == '/drain4.geojson':
            self.serve_geojson_file('drain4.geojson')

        if self.path == '/drain5.geojson':
            self.serve_geojson_file('drain5.geojson')

        if self.path == '/drain6.geojson':
            self.serve_geojson_file('drain6.geojson')

        if self.path == '/drain7.geojson':
            self.serve_geojson_file('drain7.geojson')

        elif self.path == '/exposure1.geojson':
            self.serve_geojson_file('exposure1.geojson')

        elif self.path == '/exposure2.geojson':
            self.serve_geojson_file('exposure2.geojson')

        elif self.path == '/exposure3.geojson':
            self.serve_geojson_file('exposure3.geojson')

        elif self.path == '/exposure4.geojson':
            self.serve_geojson_file('exposure4.geojson')

        elif self.path == '/exposure5.geojson':
            self.serve_geojson_file('exposure5.geojson')

        elif self.path == '/exposure6.geojson':
            self.serve_geojson_file('exposure6.geojson')

        elif self.path == '/exposure7.geojson':
            self.serve_geojson_file('exposure7.geojson')

        elif self.path == '/gwhi1.geojson':
            self.serve_geojson_file('gwhi1.geojson')

        elif self.path == '/gwhi2.geojson':
            self.serve_geojson_file('gwhi2.geojson')

        elif self.path == '/gwhi3.geojson':
            self.serve_geojson_file('gwhi3.geojson')

        elif self.path == '/gwhi4.geojson':
            self.serve_geojson_file('gwhi4.geojson')

        elif self.path == '/gwhi5.geojson':
            self.serve_geojson_file('gwhi5.geojson')

        elif self.path == '/gwhi6.geojson':
            self.serve_geojson_file('gwhi6.geojson')

        elif self.path == '/gwhi7.geojson':
            self.serve_geojson_file('gwhi7.geojson')

        elif self.path == '/wi1.geojson':
            self.serve_geojson_file('wi1.geojson')

        elif self.path == '/wi2.geojson':
            self.serve_geojson_file('wi2.geojson')

        elif self.path == '/wi3.geojson':
            self.serve_geojson_file('wi3.geojson')

        elif self.path == '/wi4.geojson':
            self.serve_geojson_file('wi4.geojson')

        elif self.path == '/wi5.geojson':
            self.serve_geojson_file('wi5.geojson')

        elif self.path == '/wi6.geojson':
            self.serve_geojson_file('wi6.geojson')

        elif self.path == '/wi7.geojson':
            self.serve_geojson_file('wi7.geojson')

        elif self.path == '/proximity1.geojson':
            self.serve_geojson_file('proximity1.geojson')

        elif self.path == '/proximity2.geojson':
            self.serve_geojson_file('proximity2.geojson')

        elif self.path == '/proximity3.geojson':
            self.serve_geojson_file('proximity3.geojson')

        elif self.path == '/proximity4.geojson':
            self.serve_geojson_file('proximity4.geojson')

        elif self.path == '/proximity5.geojson':
            self.serve_geojson_file('proximity5.geojson')

        elif self.path == '/proximity6.geojson':
            self.serve_geojson_file('proximity6.geojson')

        elif self.path == '/proximity7.geojson':
            self.serve_geojson_file('proximity7.geojson')

        elif self.path == '/roads1.geojson':
            self.serve_geojson_file('roads1.geojson')

        elif self.path == '/roads2.geojson':
            self.serve_geojson_file('roads2.geojson')

        elif self.path == '/roads3.geojson':
            self.serve_geojson_file('roads3.geojson')

        elif self.path == '/roads4.geojson':
            self.serve_geojson_file('roads4.geojson')

        elif self.path == '/roads5.geojson':
            self.serve_geojson_file('roads5.geojson')

        elif self.path == '/roads6.geojson':
            self.serve_geojson_file('roads6.geojson')

        elif self.path == '/roads7.geojson':
            self.serve_geojson_file('roads7.geojson')

        elif self.path == '/twe1.geojson':
            self.serve_geojson_file('twe1.geojson')

        elif self.path == '/twe2.geojson':
            self.serve_geojson_file('twe2.geojson')

        elif self.path == '/twe3.geojson':
            self.serve_geojson_file('twe3.geojson')

        elif self.path == '/twe4.geojson':
            self.serve_geojson_file('twe4.geojson')

        elif self.path == '/twe5.geojson':
            self.serve_geojson_file('twe5.geojson')

        elif self.path == '/twe6.geojson':
            self.serve_geojson_file('twe6.geojson')

        elif self.path == '/twe7.geojson':
            self.serve_geojson_file('twe7.geojson')

        elif self.path == '/ndvi1.geojson':
            self.serve_geojson_file('ndvi1.geojson')

        elif self.path == '/ndvi2.geojson':
            self.serve_geojson_file('ndvi2.geojson')

        elif self.path == '/ndvi3.geojson':
            self.serve_geojson_file('ndvi3.geojson')

        elif self.path == '/ndvi4.geojson':
            self.serve_geojson_file('ndvi4.geojson')

        elif self.path == '/ndvi5.geojson':
            self.serve_geojson_file('ndvi5.geojson')

        elif self.path == '/ndvi6.geojson':
            self.serve_geojson_file('ndvi6.geojson')

        elif self.path == '/ndvi7.geojson':
            self.serve_geojson_file('ndvi7.geojson')

        elif self.path == '/land1.geojson':
            self.serve_geojson_file('land1.geojson')

        elif self.path == '/land2.geojson':
            self.serve_geojson_file('land2.geojson')

        elif self.path == '/land3.geojson':
            self.serve_geojson_file('land3.geojson')

        elif self.path == '/land4.geojson':
            self.serve_geojson_file('land4.geojson')

        elif self.path == '/land5.geojson':
            self.serve_geojson_file('land5.geojson')

        elif self.path == '/land6.geojson':
            self.serve_geojson_file('land6.geojson')

        elif self.path == '/land7.geojson':
            self.serve_geojson_file('land7.geojson')

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
