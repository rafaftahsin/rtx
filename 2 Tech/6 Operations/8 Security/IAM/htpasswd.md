---
title: htpasswd
---


### How to install htpasswd

```shell
sudo apt-get update && sudo apt-get install apache2-utils
```

Ref: https://it-explain.com/how-to-install-htpasswd-utility-in-linux/

### Generate password

```shell
htpasswd -c credentials.passwd user_name
```

For existing file, just run `htpasswd credentials.passwd user_name new_user_name`

