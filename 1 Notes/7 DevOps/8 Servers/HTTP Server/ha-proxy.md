---
title: HA Proxy
---

### How to install HA-Proxy on ubuntu

```
sudo apt install --no-install-recommends software-properties-common
sudo add-apt-repository ppa:vbernat/haproxy-2.4 -y
sudo apt install haproxy=2.4.\*
```

Ref: 
- https://haproxy.debian.net/
- https://www.haproxy.com/blog/how-to-install-haproxy-on-ubuntu

### Check if haproxy is running

```
sudo systemctl status haproxy
```

### How to configure HA-Proxy 

Ref: https://www.haproxy.com/blog/haproxy-configuration-basics-load-balance-your-servers

#### Example configuration

```
defaults
  mode http
  timeout client 10s
  timeout connect 5s
  timeout server 10s 
  timeout http-request 10s

frontend myfrontend
  bind 127.0.0.1:80
  default_backend myservers

backend myservers
  server server1 127.0.0.1:8000
```


### How to validate haproxy configuration ? 

```
haproxy -f haproxy.cfg -c
```
