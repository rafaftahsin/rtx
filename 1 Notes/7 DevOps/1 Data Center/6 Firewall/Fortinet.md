---
title: Fortinet
---

### Download Fortinet VPN client and other softwares

https://www.fortinet.com/support/product-downloads

### Fortinet VM Deployment Package 

https://docs.fortinet.com/document/fortigate-private-cloud/7.6.0/vmware-esxi-administration-guide/961760/downloading-the-fortigate-vm-deployment-package

### Site to Site VPN with Fortigate

https://www.youtube.com/watch?v=Sp4KSILHOWI

### Forticlient VPN - Terminal

- https://askubuntu.com/questions/1138428/how-can-i-connect-to-a-forticlient-ssl-vpn-via-terminal
- 

### openfortivpn - terminal systemd file

```
[Unit]
Description=openfortivpn-daemon
After=network-online.target
Wants=network-online.target systemd-networkd-wait-online.service

StartLimitIntervalSec=500
StartLimitBurst=5

[Service]
Restart=on-failure
RestartSec=5s

ExecStart=/usr/bin/openfortivpn

[Install]
WantedBy=multi-user.target
```

Ref: https://github.com/adrienverge/openfortivpn/issues/93

### Fortinet ping options

```
execute ping-options source  172.31.6.230
execute ping 172.31.6.229
```

### Config location 

/etc/openfortivpn/my-config

### Assign Public IP to vpn client 

- https://www.youtube.com/watch?v=1iTvQ1ZA0wU

### How to uninstall fortinet vpn clinet in mac

There's an uninstaller app for fortinet

### frotinet client on mac 

- https://stackoverflow.com/questions/62454456/forticlient-vpn-from-mac-cli