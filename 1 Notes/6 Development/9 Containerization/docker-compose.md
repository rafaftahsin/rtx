---
title: docker-compose
---

### Install docker-compose

```shell
sudo curl -SL https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-linux-x86_64 \
    -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### docker-compose file reference 

- https://docs.docker.com/reference/compose-file/services/

### Run container as root

```
...
services:
    datapower:
        build: .
        user: root
        ports:
            - "9090:9090"
        depends_on:
            - db
...
```

Ref: https://stackoverflow.com/questions/48727548/how-to-configure-docker-compose-yml-to-up-a-container-as-root

### Restart policies

```
    restart: "no"
    restart: always
    restart: on-failure
    restart: on-failure:3
    restart: unless-stopped
```

### Using alternative container runtime 

- https://docs.docker.com/engine/daemon/alternative-runtimes/

### Networking in docker-compose with links

- https://docs.docker.com/compose/how-tos/networking/
- https://docs.docker.com/reference/compose-file/services/#links
