---
title: Github Action
---


### Github Action Dockerhub push

```
 name: Dev Deployment

 on:
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

 jobs:

  build:

    runs-on: ubuntu-latest

    steps:

      - name: Check Out Repo 
        uses: actions/checkout@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_PASSWORD }}

      - name: Set up Docker Buildx
        id: buildx
        uses: docker/setup-buildx-action@v1

      - name: get repository name
        run: echo "REPOSITORY_NAME=${GITHUB_REPOSITORY#*/}" >> $GITHUB_ENV

      - name: Build and push
        id: docker_build
        uses: docker/build-push-action@v2
        with:
          context: ./
          file: ./Dockerfile
          push: true
          tags: ${{ secrets.DOCKER_HUB_USERNAME }}/${{ env.REPOSITORY_NAME }}:${{github.run_number}}

      - name: Image digest
        run: echo ${{ steps.docker_build.outputs.digest }}
```

### Variable Information 

- https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables

### .env Variable decode with base64

```
      - name: ENV Decode
        run: echo ${{ secrets.ENV_ENCODE_DEV }} | base64 -d > .env
```

### Github Action SSH Action 

- https://github.com/appleboy/ssh-action

### Github Action OIDC Provider for AWS 

- https://github.com/aws-actions/configure-aws-credentials?tab=readme-ov-file#oidc

