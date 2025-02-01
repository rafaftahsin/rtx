---
sidebar_position: 2
title: Docker Swarm
---

### Error `error on running swarm [manager stopped: can't initialize raft node: WAL error cannot be repaired: unexpected EOF] #2959`

- Mostly a disk space issue 

release free space on host machine and run `sudo systemctl restart docker` help it.

### docker swarm github action 

- https://github.com/serversideup/github-action-docker-swarm-deploy
- https://blog.devops.dev/docker-swarm-basics-and-how-to-use-it-with-github-actions-ci-cd-in-azure-cloud-iaas-and-paas-8be800da60d0