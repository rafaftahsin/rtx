---
title: ssh 
---

### SSH Server 

- OpenSSH


### SSH Clients

- cli
  - `ssh`
- GUI SSH Connection Manager
  - MobaXTerm (Windows)
  - Putty

- Ref: https://www.reddit.com/r/networking/comments/c65s3s/favorite_ssh_session_manager/

### ssh config (client side)

- https://www.reddit.com/r/commandline/comments/pusfjw/command_line_ssh_connection_manager/
- https://www.ssh.com/academy/ssh/config

### WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

ssh-keygen -R 192.168.3.10

### SSH Port forwarding 

```
ssh -N -L <local-port>:<remote-host>:<remote-port> <user>@<remote-host>
```

- `-N` restrics establishing a login shell to remote 
- `-f` shell runs in the background. 

Ref: https://builtin.com/software-engineering-perspectives/ssh-port-forwarding