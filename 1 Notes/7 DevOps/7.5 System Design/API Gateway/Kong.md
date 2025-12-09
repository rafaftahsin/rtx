---
title: Kong
---

### Sample docker-compose file to setup 

`docker-compose.yml` 

```
version: '3.8'

services:
  kong:
    image: kong/kong-gateway:3.7.1.2
    container_name: kong
    environment:
      KONG_DATABASE: postgres
      KONG_PG_HOST: kong-database
      KONG_PG_PASSWORD: kong
      KONG_PG_USER: kong
      KONG_PROXY_ACCESS_LOG: /dev/stdout
      KONG_ADMIN_ACCESS_LOG: /dev/stdout
      KONG_PROXY_ERROR_LOG: /dev/stderr
      KONG_ADMIN_ERROR_LOG: /dev/stderr
      KONG_ADMIN_LISTEN: 0.0.0.0:8001, 0.0.0.0:8444 ssl
      KONG_ADMIN_GUI_URL: http://0.0.0.0:8002
    ports:
      - '8000:8000'
      - '8443:8443'
      - '8001:8001'
      - '8002:8002'
      - '8444:8444'
    networks:
      - kong_network

  konga:
    image: pantsel/konga:latest
    container_name: konga
    environment:
      NODE_ENV: production
      KONGA_DB_ADAPTER: 'postgres'
      KONGA_DB_URI: 'postgres://kong:kong@kong-database:5432/konga'
    ports:
      - '1337:1337'
    networks:
      - kong_network
    depends_on:
      - kong

networks:
  kong_network:
    ipam:
      driver: default
      config:
        - subnet: "172.16.239.0/24"
        - subnet: "2001:3984:3989::/64"
```

Corresponding `db.yml`

```
version: '3.8'

services:
  kong-database:
    image: postgres:13
    container_name: kong-database
    environment:
      POSTGRES_USER: kong
      POSTGRES_DB: kong
      POSTGRES_PASSWORD: kong
    ports:
      - '5432:5432'
    networks:
      - kong_sheba-network

  kong-migration:
    image: kong/kong-gateway:3.7.1.2
    container_name: kong-migration
    command: kong migrations bootstrap
    environment:
      KONG_DATABASE: postgres
      KONG_PG_HOST: kong-database
      KONG_PG_PASSWORD: kong
      KONG_PG_USER: kong
      KONG_CASSANDRA_CONTACT_POINTS: kong-database
    networks:
      - kong_sheba-network
    depends_on:
      - kong-database

networks:
  kong_sheba-network:
    ipam:
      driver: default
      config:
        - subnet: "172.16.239.0/24"
        - subnet: "2001:3984:3989::/64"
```