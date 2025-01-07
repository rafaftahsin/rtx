---
title: composer
---

----
### How to install composer on unix-like machines

```shell
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

Ref: https://www.digitalocean.com/community/tutorials/how-to-install-composer-on-ubuntu-20-04-quickstart


### Composer bitbucket github login 

https://getcomposer.org/doc/articles/authentication-for-private-packages.md#bitbucket-oauth


Note: it doesn't generate token in bitbucket if callback url is not set. 

Ref: 

### Install specific version of composer 

```
php composer-setup.php --version=1.0.0-alpha8
```

Ref: 
- https://getcomposer.org/download/
- https://schophel.wordpress.com/2021/01/19/how-to-downgrade-or-install-a-specific-version-of-composer/
