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

### ssh agent forwarding configuration in config file 

```
ForwardAgent
```

Ref: https://www.ssh.com/academy/ssh/config

### Config file Reference 

- https://www.ssh.com/academy/ssh/config

### ssh Man

- https://man7.org/linux/man-pages/man1/ssh.1.html

### ssh proxy and jump host

- https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Proxies_and_Jump_Hosts


### Run ssh on specific port

```
ubuntu@ip-172-31-13-46:~$ cat /etc/ssh/sshd_config

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

Port 443
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::
```
