---
title: redis
---

### How to allow redis from outside localhost ?

Edit `/etc/redis/redis.conf` file.

Change 

```
bind 127.0.0.1
```

to

```
bind 0.0.0.0
```

Ref: https://stackoverflow.com/questions/19091087/open-redis-port-for-remote-connections