FROM jekyll/jekyll:3.8 as builder

COPY app .
RUN jekyll build --destination /tmp/build

FROM nginx:1.15

# Copy files into the image
RUN cat /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tmp/build /app
WORKDIR /app

# Inherit CMD from nginx
