import subprocess
import urllib2

download_dir = "/usr/share/httpd/youtube-mp3/"
file_ext = ".m4a"

def send_error(environ, start_response):
    output = []
    output_len = sum(len(line) for line in output)
    response_headers = [('Content-type', 'text/plain'),
            ('Content-Length', str(output_len))]
    start_response('400 Bad Request', response_headers)
    return output

def application(environ, start_response):
    output = []

    if environ['REQUEST_METHOD'] != 'POST':
        return send_error(environ, start_response)

    length = int(environ.get('CONTENT_LENGTH', '0'))
    req_url = environ['wsgi.input'].read(length)

    # Download the requested url with youtube-dl
    proc = subprocess.Popen(["youtube-dl", req_url, "--get-title"], stdout=subprocess.PIPE)
    video_title = proc.stdout.read()

    ret = subprocess.call(["youtube-dl", req_url, "-f", "140", "-o", download_dir + video_title + file_ext])

    # If fail return error
    if ret != 0:
        return send_error(environ, start_response)

    # Add audio to output
    file_name = download_dir + video_title + file_ext
    with open(file_name, "rb") as file:
        output.append(file.read())

    # Delete audio
    subprocess.call(["rm", file_name]);

    output_len = sum(len(line) for line in output)
    response_headers = [('Content-type', 'audio/mpeg'),
            ('Content-Length', str(output_len))]
    start_response('200 OK', response_headers)
    return output
