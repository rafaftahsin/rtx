---
title: wordpress
---

### Wordpress example Dockerfile

```Dockerfile
FROM php:7.4-apache
RUN docker-php-source extract && docker-php-ext-install mysqli && docker-php-source delete
COPY --chown=www-data:www-data htdocs /var/www/html
COPY --chown=www-data:www-data ./wp-config.php /var/www/html/wp-config.php
```