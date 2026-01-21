---
title: apache
---


### apache2 configtest

```
apachectl configtest
```

### apache2 moduels

rewrite module - `sudo a2enmod rewrite`
ssl module - `sudo a2enmod ssl`

### Restrict from IPs

```
<VirtualHost *:443>
                ServerName abc.xyz
                SSLEngine on
                SSLCertificateKeyFile /etc/ssl/ssl.keys/priv.key
                SSLCertificateFile /etc/ssl/ssl.cert/cert.crt
                SSLCertificateChainFile /etc/ssl/ssl.cert/bundle.crt

                <Location />
                        Require ip 103.197.207.9/32 103.147.163.172/32 103.197.207.30/32 13.232.119.224/32 103.197.207.58/24 13.200.188.45/32 103.197.206.30/32 103.197.206.164/32 103.122.30.51/32
                </Location>

                SSLProxyEngine On
                ProxyRequests on
                ProxyPass / https://example.com/
                ProxyPassReverse / http://example.com/
        </VirtualHost>
```


### Apache www-data user 

- Home Directory /var/www

```
root@dev-vm:/var/www# su -l www-data -s /bin/bash
www-data@dev-vm:~$ echo $HOME
/var/www
```

### su - www user

```
sudo su -l www-data -s /bin/bash
```

Ref: https://askubuntu.com/questions/486346/this-account-is-currently-not-available-error-when-trying-to-ssh
