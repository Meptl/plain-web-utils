import subprocess
import urllib2
import json
import base64

download_dir = "/tmp/"
file_ext = ".m4a"

def send_error(environ, start_response):
    output = []
    output_len = sum(len(line) for line in output)
    response_headers = [('Content-type', 'text/plain'),
            ('Content-Length', str(output_len))]
    start_response('400 Bad Request', response_headers)
    return output

def application(environ, start_response):
    output = {}

    if environ['REQUEST_METHOD'] != 'POST':
        return send_error(environ, start_response)

    length = int(environ.get('CONTENT_LENGTH', '0'))
    req_url = environ['wsgi.input'].read(length)

    # Get video title, drop last letter
    proc = subprocess.Popen(["youtube-dl", req_url, "--get-title"], stdout=subprocess.PIPE)
    video_title = proc.stdout.read()[:-1]

    # Download the requested url with youtube-dl. Placed in current dir
    full_name = download_dir + video_title + file_ext
    ret = subprocess.call(["youtube-dl", req_url, "-f", "140", "-o", full_name])

    # If fail return error
    if ret != 0:
        return send_error(environ, start_response)

    # Read the audio file and base64 encode it.
    with open(full_name, "rb") as file:
        output["data"] = base64.b64encode(file.read())

    output["filename"] = full_name

    # Delete audio
    subprocess.call(["rm", full_name]);

    #JSONify
    output = json.dumps(output)
    output_len = sum(len(line) for line in output)
    response_headers = [('Content-type', 'application/json'),
            ('Content-Length', str(output_len))]
    start_response('200 OK', response_headers)
    return [output]
