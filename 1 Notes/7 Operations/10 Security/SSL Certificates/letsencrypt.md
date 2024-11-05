---
title: Letsencrypt
---

### manually generate ssl certificate

```shell
certbot certonly --manual -d <domain1.tld> -d <domain2.tld> -d <and-son-on>
```


### certbot certonly without manual intervention

```
certbot certonly --dns-route53 -d <domain> --register-unsafely-without-email --agree-tos
```

### How to install certbot-rotue53

sudo apt install python3-pip 
pip3 install certbot-dns-route53

### 