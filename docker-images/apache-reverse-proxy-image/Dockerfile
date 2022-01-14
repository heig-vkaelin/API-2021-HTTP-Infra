FROM php:8-apache-bullseye

RUN apt-get update && \
  apt-get install -y vim

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*