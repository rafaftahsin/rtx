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