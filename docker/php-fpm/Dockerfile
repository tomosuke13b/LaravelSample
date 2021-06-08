FROM php:7.4.7-fpm

RUN apt update -y
RUN apt install -y libfcgi0ldbl curl git unzip wget vim

# nginxというユーザを作る
RUN useradd -m -s /bin/sh -u 1000 nginx

# 設定ファイルを指定の場所に置く
COPY ./www.conf /usr/local/etc/php-fpm.d/zzz-www.conf

# Composeインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# nodejs 16インストール
RUN apt install -y npm
RUN npm install n -g
RUN n 16

# ユーザ変更
USER nginx

# 作業ディレクトリ
WORKDIR /var/www

VOLUME ["/var/run/php-fpm"]