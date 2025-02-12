---
title: OpenFortiVPN
---

### How to install on mac

```
brew install openfortivpn
```

### Start on mac 

When Installed with brew 

```
sudo brew services start openfortivpn
```

Otherwise,

```
sudo openfortivpn -c ~/.config/openfortivpn.config
```

Ref: 

### Config File Example

```
host = 1.2.3.4
port = 8443
username = username
password = password
trusted-cert = 29628e78ecb7297a66ade850f46be15a82903dbc1dac674f8bd0a75b3f1aaaa
```

Ref: https://support.gonzaga.edu/TDClient/30/Portal/KB/ArticleDet?ID=119