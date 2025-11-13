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
