from http.server  import HTTPServer, BaseHTTPRequestHandler , ThreadingHTTPServer
from signal import signal, SIGINT

signal(SIGINT, lambda x, y: exit(0))

def read_the_file(self, file_name):
    try:
        with open(file_name, 'rb') as file:
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(file.read())
    except IOError:
        read_the_file(self, 'src/404.html')

def check_which_path(self):
    print("I reviev request the path is: ", self.path)
    if self.path == '/':
        read_the_file(self, 'src/index.html')
    elif self.path == '/projects':
        read_the_file(self, 'src/projects.html')
    elif self.path == '/contact':
        read_the_file(self, 'src/contact.html')
    else:
        read_the_file(self, 'src/404.html')

def handle_post(self):
    content_length = int(self.headers['Content-Length'])
    post_data = self.rfile.read(content_length)
    print("I reviev post request the path is: ", self.path)
    self.send_response(200)
    self.send_header('Content-type', 'text/html')
    self.end_headers()
    read_the_file(self, 'src/index.html')

class Serv(BaseHTTPRequestHandler):
    def do_GET(self):
        check_which_path(self)
    def do_POST(self):
        print("The method is: ", self.command)
        check_which_path(self)

host = 'localhost'
port = 7070

httpd = ThreadingHTTPServer((host, port), Serv)


print("Server is running on port ", port)
httpd.serve_forever()
