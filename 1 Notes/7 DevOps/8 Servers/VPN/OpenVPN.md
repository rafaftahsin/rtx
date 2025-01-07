---
title: OpenVPN
---

### How to install OpenVPN


### How to install openvpn client on ubuntu

apt install apt-transport-https curl
mkdir -p /etc/apt/keyrings 
echo "deb [signed-by=/etc/apt/keyrings/openvpn.asc] https://packages.openvpn.net/open
vpn3/debian focal main" >> /etc/apt/sources.list.d/openvpn3.list

apt update 
apt install openvpn3