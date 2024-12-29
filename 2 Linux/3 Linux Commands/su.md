---
title: su
---

Run a shell script as another user

```shell
su - <username> -c "<commands>"
```

### Run as a user without a shell configured

su - <username> -s '/bin/bash' # or other shell -c <command>