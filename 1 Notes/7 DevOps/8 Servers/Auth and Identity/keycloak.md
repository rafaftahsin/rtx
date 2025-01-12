---
title: keycloak
---

### dev docker-compose 

```
version: '3'
services:
  keycloak:
    container_name: keycloak
    environment:
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
    image: quay.io/keycloak/keycloak:26.0.7
    ports:
      - "8080:8080"
    restart: unless-stopped
    command: [ "start-dev" ]
```

- It will give `HTTPS required error when you try to load. Do the following to recover 

```
cd /opt/keycloak/bin
./kcadm.sh config credentials --server http://localhost:8080 --realm master --user admin
./kcadm.sh update realms/master -s sslRequired=NONE
```

Ref: https://stackoverflow.com/a/75827999

Then setup Frontend URL: Include http/https in your frontend URL, if your server uses https over other host address.

Ref: 

Further Read: 

- https://medium.com/@fingervinicius/easy-running-keycloak-with-docker-compose-b0d7a4ee2358
- https://github.com/eabykov/keycloak-compose

### KeyCloak Bare Metal Install 

https://www.keycloak.org/getting-started/getting-started-zip