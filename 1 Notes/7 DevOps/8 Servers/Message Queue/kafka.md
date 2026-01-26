---
title: kafka
---

### Kafka

```
version: '3.8'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    container_name: cp-zookeeper
    networks:
      - kafka
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    restart: unless-stopped

  kafka:
    image: confluentinc/cp-kafka:latest
    hostname: kafka
    container_name: cp-kafka
    depends_on:
      - zookeeper
    networks:
      - kafka
    ports:
      - 9093:9093
    restart: unless-stopped
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: DOCKER_NET://kafka:9093
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: DOCKER_NET:PLAINTEXT,HOST_NET:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: DOCKER_NET
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_CONFLUENT_SUPPORT_METRICS_ENABLE: 0


  kafka_ui:
    image: provectuslabs/kafka-ui:latest
    depends_on:
      - kafka
    networks:
      - kafka
    ports:
      - '8080:8080'
    restart: unless-stopped
    environment:
      - KAFKA_CLUSTERS_0_ZOOKEEPER=zookeeper:2181
      - KAFKA_CLUSTERS_0_NAME=local
      - KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka:9092

networks:
  kafka:
    external: true
```

Example integration in service:

```
version: "3.5"
services:
  service1:
    env_file:
      - .env
    image: img:7
    container_name: some_service
    ports:
      - ${PORT}:${PORT}
    networks:
      - kafka
    restart: on-failure
    logging:
     driver: loki
     options:
       loki-url: "http://logs.dev-sheba.xyz:3100/loki/api/v1/push"
    #links:
    #  - cp-kafka

networks:
  kafka:
    external: true
```


### KAFKA topic partition

- https://stackoverflow.com/questions/38024514/understanding-kafka-topics-and-partitions
