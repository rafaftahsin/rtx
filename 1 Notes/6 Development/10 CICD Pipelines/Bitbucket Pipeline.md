---
title: Bitbucket Pipeline
---

### Bitbucket Pipeline 

```
image: ubuntu:22.04
pipelines:
  default:
    - step:
        script:
          - docker login -u $DOCKER_HUB_USER -p $DOCKER_HUB_PASSWORD
          - docker build -t shebadev/bitbucket-pipeline-test:v1 .
          - docker push shebadev/bitbucket-pipeline-test:v1
        services:
          - docker
```

Ref: https://support.atlassian.com/bitbucket-cloud/docs/build-and-push-a-docker-image-to-a-container-registry/

### Pipeline Syntax

- https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/