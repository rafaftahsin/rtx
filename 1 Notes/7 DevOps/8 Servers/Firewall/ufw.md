---
title: ufw
---

### Infro

```
sudo ufw status             # ufw active | inactive 
sudo ufw allow <PORT>/tcp   # 
sudo ufw status
sudo ufw enable
sudo ufw disable
```

Ref: 

- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu
- https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands * 

### Terminal interface for ufw

- https://github.com/peltho/tufw?tab=readme-ov-file

### Rate limiting with ufw

```
sudo ufw limit ssh
```

This single command creates a rule that allows SSH connections, but with a condition: if an IP address attempts to initiate six or more connections within 30 seconds, UFW will deny further connections from that IP. It’s a simple and effective way to add an extra layer of security to services exposed to the internet.

Ref: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu
