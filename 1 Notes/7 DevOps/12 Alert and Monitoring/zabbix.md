---
title: zabbix
---

### Zabbix Install 

- https://www.zabbix.com/download

### zabbix error 

```
 sudo su - zabbix -c "docker run hello-world"
su: warning: cannot change directory to /var/lib/zabbix/: No such file or directory
This account is currently not available.
```

Soln:

- Create the directory /var/lib/zabbix yourself. Permissions should be owned by the zabbix user and read/write by the zabbix user.

```
mkdir -p /var/lib/zabbix/
chown zabbix:zabbix /var/lib/zabbix/
chmod 755 /var/lib/zabbix/
```

### How to run as root 

- https://www.zabbix.com/documentation/current/en/manual/appendix/install/run_agent_as_root

Caution: Running agent as root is not a good idea

### Docker Agent 2 - troubleshooting 

- Make sure zabbix is in docker group 

Ref: 

- https://www.zabbix.com/forum/zabbix-help/404114-zabbix-agent2-shows-docker-offline
- https://www.zabbix.com/forum/zabbix-troubleshooting-and-problems/400109-zabbix-5-0-0beta1-ubuntu-18-04-i-add-template-app-docker-get-error-not-supported#post400163

### zabbix_get -> command not found ... 

You need to install zabbix -get ... as of this forum ... but I'm not convinced. This should have been installed by default.

Ref:  https://mangolassi.it/topic/12935/zabbix-gone-wild/21?page=2

### docker monitoring with zabbix

https://www.digitalocean.com/community/tutorials/how-to-monitor-docker-using-zabbix-on-ubuntu-20-04

