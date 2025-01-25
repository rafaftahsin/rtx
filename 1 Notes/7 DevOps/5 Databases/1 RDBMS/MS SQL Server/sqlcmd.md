---
title: sqlcmd
---

### How to install SQL CMD in linux 

#### > Import the public repository GPG keys.

```
curl https://packages.microsoft.com/keys/microsoft.asc | sudo tee /etc/apt/trusted.gpg.d/microsoft.asc
```

#### > Register the Microsoft Ubuntu repository

- Ubuntu 22.04  `curl https://packages.microsoft.com/config/ubuntu/22.04/prod.list | sudo tee /etc/apt/sources.list.d/mssql-release.list`
- Ubuntu 20.04 `curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | sudo tee /etc/apt/sources.list.d/mssql-release.list`
- Ubuntu 18.04 `curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list | sudo tee /etc/apt/sources.list.d/mssql-release.list`
- Ubuntu 16.04 `curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/mssql-release.list`

#### > Install

```
sudo apt-get update
sudo apt-get install mssql-tools18 unixodbc-dev
sudo apt-get update
sudo apt-get install mssql-tools18
```

#### > The executable

```
/opt/mssql-tools18/bin
```

- https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver16&tabs=ubuntu-install

