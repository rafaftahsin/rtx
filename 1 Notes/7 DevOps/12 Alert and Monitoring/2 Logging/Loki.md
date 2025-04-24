---
title: Loki
---

### Install loki locally

- add Grafana `apt` repository 

```
# mkdir -p /etc/apt/keyrings/
# wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor > /etc/apt/keyrings/grafana.gpg
# echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | tee /etc/apt/sources.list.d/grafana.list
```

Ref: [Grafana APT Ref](https://apt.grafana.com/)

- Install loki

```
apt-get update
apt-get install loki
```

After installation, check loki is running with `http://<loki-url>:3100/metrics`

### If you install loki with grafana's apt repo it will fail. You need to update the following two configuration file.

- `/etc/systemd/system/loki.service`

```TOML
[Unit]
Description=Loki service
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=loki
ExecStart=/usr/bin/loki -config.file /etc/loki/config.yml -config.expand-env=true
# Give a reasonable amount of time for the server to start up/shut down
TimeoutSec = 120
Restart = on-failure
RestartSec = 2

[Install]
WantedBy=multi-user.target
```

- `/etc/loki/config.yml`

```YML
auth_enabled: false

server:
  http_listen_port: 3100
  grpc_listen_port: 9096
  log_level: debug
  grpc_server_max_concurrent_streams: 1000
    #   http_tls_config:
    #     cert_file: /etc/loki/tls/loki.crt
    #     key_file: /etc/loki/tls/loki.key
    #     client_auth_type: RequireAndVerifyClientCert
    #     client_ca_file: /etc/loki/tls/loki.crt

common:
  instance_addr: 127.0.0.1
  path_prefix: /tmp/loki
  storage:
    filesystem:
      chunks_directory: /tmp/loki/chunks
      rules_directory: /tmp/loki/rules
  replication_factor: 1
  ring:
    kvstore:
      store: inmemory

query_range:
  results_cache:
    cache:
      embedded_cache:
        enabled: true
        max_size_mb: 100

limits_config:
  metric_aggregation_enabled: true

schema_config:
  configs:
    - from: 2020-10-24
      store: tsdb
      object_store: filesystem
      schema: v13
      index:
        prefix: index_
        period: 24h

pattern_ingester:
  enabled: true
  metric_aggregation:
    # enabled: true
    loki_address: localhost:3100

ruler:
  alertmanager_url: http://localhost:9093

frontend:
  encoding: protobuf

# By default, Loki will send anonymous, but uniquely-identifiable usage and configuration
# analytics to Grafana Labs. These statistics are sent to https://stats.grafana.org/
#
# Statistics help us better understand how Loki is used, and they show us performance
# levels for most users. This helps us prioritize features and documentation.
# For more information on what's sent, look at
# https://github.com/grafana/loki/blob/main/pkg/analytics/stats.go
# Refer to the buildReport method to see what goes into a report.
#
# If you would like to disable reporting, uncomment the following lines:
#analytics:
#  reporting_enabled: false
```

### How to install loki and monitor docker log with it 

- https://www.youtube.com/watch?v=TrRNsDz7bMk
- https://grafana.com/docs/loki/latest/send-data/docker-driver/configuration/
- https://grafana.com/docs/loki/latest/send-data/docker-driver/
- https://www.geeksforgeeks.org/how-to-install-grafana-loki-on-ubuntu/
- https://medium.com/@abdullah037b/setup-loki-as-a-service-in-linux-cdf114d8e1f5

#### nginx configuration for loki 

```nginx
# redirect all HTTP requests to HTTPS
server {
    listen 80 default_server;
    listen [::]:80 default_server;
 
    location / {
        return 301 https://$host$request_uri;
    }
}
 
# reverse proxy for Loki
server {
    listen 443 ssl;
    listen [::]:443 ssl;
 
    server_name loki.example.com;
 
    include /etc/nginx/conf.d/ssl.conf;
 
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;
 
    client_max_body_size 0;
 
    location / {
        allow X.X.X.X;  # Grafana IP
        deny all;
 
    # Enable NGINX basic auth
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd; 
 
        include /etc/nginx/conf.d/proxy.conf;
        set $upstream_app 127.0.0.1;
        set $upstream_port 3100;
        set $upstream_proto http;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
    }
}
```

### Loki Configuration Parameters

- https://grafana.com/docs/loki/latest/configure/

### Install loki client on docker 

```
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
docker plugin enable loki
docker plugin ls
```

Ref: https://grafana.com/docs/loki/latest/send-data/docker-driver/

### ship docker log to loki 

Inside composer 

```
version: "3.7"
services:
  logger:
    image: grafana/grafana
    logging:
      driver: loki
      options:
        loki-url: "https://<user_id>:<password>@logs-prod-us-central1.grafana.net/loki/api/v1/push"
```

From docker run 

```
docker run --log-driver=loki \
    --log-opt loki-url="https://<user_id>:<password>@logs-us-west1.grafana.net/loki/api/v1/push" \
    --log-opt loki-retries=5 \
    --log-opt loki-batch-size=400 \
    grafana/grafana
```

### Loki Configuration Example

- https://grafana.com/docs/loki/latest/configure/examples/configuration-examples/
- Multiline Setup - https://grafana.com/docs/loki/latest/send-data/promtail/stages/multiline/