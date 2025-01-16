---
title: Dockerfile
---

### Example dockerfile

- Dockerfile

```
FROM ubuntu:22.04
RUN apt update && apt install -y python3
WORKDIR /app
COPY index.html /app/index.html
ENTRYPOINT [ "python3", "-m" , "http.server" ]
```

- index.html

```
Hello World
```

Ref: https://docs.docker.com/reference/dockerfile/