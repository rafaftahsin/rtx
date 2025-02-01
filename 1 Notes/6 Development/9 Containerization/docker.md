---
title: docker
---

### add user to docker group

```
sudo usermod -aG docker $USER
newgrp docker
```

### docker start automatically 

User `--restart`

With any of the value among `no` | `on-failure[:max-retries]` | ~~ `always` ~~ | `unless-stopped` 

Ref: https://docs.docker.com/engine/containers/start-containers-automatically/

Do not use always, though you can. If you use `always` container will restart even when you manually stop the container. If you accedently endup using `always`, update container with `sudo docker update --restart=no <container_id>`. 

Ref: https://stackoverflow.com/a/39072476/4814427

### Docker remobe build cache

```
docker builder prune
```

Ref: https://docs.docker.com/reference/cli/docker/builder/prune/

