FROM php:8-apache

ARG RPC_NODE_URL
ENV RPC_NODE_URL=$RPC_NODE_URL

# Create proxy that will redirect requests to "/node_api" to NODE
RUN a2enmod rewrite headers env ssl proxy proxy_http
RUN unlink /etc/apache2/sites-enabled/000-default.conf
RUN echo "<VirtualHost *:80> \n\
    SSLProxyEngine on \n\
    <Location /node_api> \n\
        ProxyPass           \"\${RPC_NODE_URL}\" \n\
        ProxyPassReverse    \"\${RPC_NODE_URL}\" \n\
    </Location> \n\
</VirtualHost>" > /etc/apache2/sites-enabled/001-api-proxy.conf

COPY . /var/www/html/

# Replace node url
RUN sed -i "s|var api = '.*';|var api = '/node_api';|g" /var/www/html/config.js && \
    sed -i "s|\$node = '.*';|\$node = '/node_api';|g" /var/www/html/config.php
