FROM nginx

EXPOSE 443
EXPOSE 80

COPY ./FakeTwitter/dist/FakeTwitter /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./keys /etc/nginx/ssl