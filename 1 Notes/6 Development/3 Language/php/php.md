---
title: php
---

----
| Feature                | Tool                                 |
|------------------------|--------------------------------------|
| Language               | php                                  |
| MVC FrameWork          | Laravel<br/>Codeigniter<br/>Symphony |
| Other Web Framework    | FastAPI<br/>flask                    |
| ORM                    |                                      |
| DB Access Library      |                                      |
| IDE                    | phpstorm                             |
| Server                 | apache2                              |
| Package Manager        | composer                             |
| Related Other Tools    | Xampp<br/>phpmyadmin                 |
| Artifactory Repository |                                      |
| Test                   |                                      |
| Queue                  |                                      |
| Tutorial               |                                      |

----
### How to install php in ubuntu?

Note: for development environment, it's better to install `xampp`

- https://tecadmin.net/install-php-ubuntu-20-04/

```shell
sudo apt install software-properties-common ca-certificates lsb-release apt-transport-https 
sudo LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php 
sudo apt update
sudo apt install php7.4 ### Or other php version php8.1 | php7.2  | php5.6 
### Install necessary Extensions
sudo apt install php7.4-mysql php7.4-mbstring php7.4-xml php7.4-curl php7.4-cgi
```

### Error `Fatal error: Call to undefined function mysqli_connect()`

```shell
sudo apt install php-mysqli
```

- https://stackoverflow.com/a/47960896/4814427

### Some cool features of php

- https://www.youtube.com/watch?v=ZRV3pBuPxEQ 

### Dockerization of php application

```Dockerfile
FROM php:7.4-apache
RUN docker-php-source extract && docker-php-ext-install mysqli && docker-php-source delete
COPY --chown=www-data:www-data htdocs /var/www/html
```

Ref: https://hub.docker.com/_/php


### How to install php 7.4 in ubuntu

https://www.digitalocean.com/community/tutorials/how-to-install-php-7-4-and-set-up-a-local-development-environment-on-ubuntu-20-04

