FROM meptl/jekyll-nginx-uwsgi

RUN apk add uwsgi-python
RUN apk add youtube-dl

# Copy files into the image
COPY nginx.conf /etc/nginx/nginx.conf
COPY uwsgi.ini /etc/uwsgi.ini
COPY app /app
WORKDIR /app

# Build the site
RUN cd /app \
    && jekyll build
