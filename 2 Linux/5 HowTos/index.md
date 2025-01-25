---
title: HowTos
sidebar_position: 50
---

### How to tune Network interface

- https://www.cyberciti.biz/faq/linux-tcp-tuning/

### List all connected network interface

- https://www.cyberciti.biz/faq/linux-list-network-interfaces-names-command/

### Update path variable 

Update path for current terminal session only 

```shell
export PATH=$PATH:/the/file/path
```

Persist the change in `.bashrc` file if you need to automatically update it in each terminal session.

Ref: https://www.digitalocean.com/community/tutorials/how-to-view-and-update-the-linux-path-environment-variable

### How to change hostname 

Ref: https://phoenixnap.com/kb/ubuntu-20-04-change-hostname

### How to increase a lvm partition

1. Run below command to get PV (Physical Volume) name (Ex: /dev/sda1)

```
sudo pvs
```

2. Resize the PV (Ex: sudo pvresize /dev/sda1)

```
sudo pvresize <PV name from above step>   
``` 

3. Run below command to get root logical volume name (Filesystem value of / row; ex: /dev/mapper/ubuntu--vg-root)

```
df -h
```

4. Expand logical volume (ex : sudo lvextend -r -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv):

```
sudo lvextend -r -l +100%FREE <root logical volume name from above step>
```

Ref: https://unix.stackexchange.com/a/583544/158650


### how to establishing a bridge

- https://oper.io/?p=Ubuntu_Bridging_Network_Interfaces
- https://www.tecmint.com/create-network-bridge-in-ubuntu/
- 

### How to set timezone 

- With `TZ` variable
- With the `/etc/localtime` symbolic link
- With the value of `/etc/timezone`.
- the ZONE= attribute from `/etc/sysconfig/clock`

Ref: 

- https://linuxize.com/post/how-to-set-or-change-timezone-in-linux/
- https://www.freekb.net/Article?id=965#:~:text=On%20some%20distributions%2C%20the%20%2Fetc,being%20used%20by%20the%20system.&text=The%20%2Fetc%2Ftimezone%20file%20is,the%20%2Fetc%2Ftimezone%20file.
