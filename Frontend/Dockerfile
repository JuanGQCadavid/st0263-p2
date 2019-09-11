FROM nginx

EXPOSE 443
EXPOSE 80
EXPOSE 5000

COPY ./FakeTwitter/dist/FakeTwitter /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf