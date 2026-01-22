---
title: nginx
---

### CORS Configuration

https://www.juannicolas.eu/how-to-set-up-nginx-cors-multiple-origins/

### nginx example reverse proxy configuration

```
server {
        listen 443 ssl;
        listen [::]:443 ssl;
        server_name example.com;

        #Size archive        client_max_body_size 50M;

        ssl_certificate          /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key      /etc/letsencrypt/live/example.com/privkey.pem;
        ssl_trusted_certificate  /etc/letsencrypt/live/example.com/chain.pem;

        location / {
            proxy_set_header   X-Forwarded-For $remote_addr;
            proxy_set_header   Host $http_host;
	        proxy_set_header   X-Forwarded-For $http_x_forwarded_for;

            proxy_pass         http://localhost:3008;
	        # return 200 "OK";
	        # allow              47.128.64.14;
            # allow              103.197.206.30;
	        # deny               all;
        }

}
```

Ref: https://paigekim29.medium.com/understanding-x-forwarded-for-header-settings-in-nginx-4929f49d57dd

### Handling CORS with nginx 

- https://stackoverflow.com/questions/45986631/how-to-enable-cors-in-nginx-proxy-server

### nginx simple http credential

https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/

### Can't Upload file over 5M

```
http {
   # some code here
   sendfile on;
   client_max_body_size 888M;
   #...
}
```

### nginx conf for static site 

```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name abcd.rfft.nl;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

}
```

### nginx ssl configuration

```
server {

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name abcd.rfft.nl;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}


    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/abcd.rfft.nl/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/abcd.rfft.nl/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = abcd.rfft.nl) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


	listen 80 default_server;
	listen [::]:80 default_server;

	server_name abcd.rfft.nl;
    return 404; # managed by Certbot


}
```


### nginx proxy pass documentation

- https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
