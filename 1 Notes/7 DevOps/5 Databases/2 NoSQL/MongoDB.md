---
title: MongoDB
---

### DB Dump

```
mongodump <options> <connection-string>
```

Ref: https://www.mongodb.com/docs/database-tools/mongodump/

### How to install mongodb on ubuntu 

#### > Install Dependencies

```
sudo apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor
```

#### > Add apt list file 

- Ubuntu 20.04 : `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`

- Ubuntu 22.04 : `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`

- Ubuntu 24.04 : `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`

#### > Install mongodb

```
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
```

Ref: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

### Bind mongodb from outside localhost

#### > Edit `/etc/mongod.conf` and update `bindIp`

```
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0
```

### How to create user and assign role 

```mongo
use test
db.createUser(
  {
    user: "myTester",
    pwd:  passwordPrompt(),   // or cleartext password
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)
```

Ref: https://www.mongodb.com/docs/manual/tutorial/create-users/

### Mongodb builtin roles 

- https://www.mongodb.com/docs/manual/reference/built-in-roles/

### Create admin user with admin previlege

```
use admin
db.createUser(
  {
    user: "admin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [ { role: "root", db: "admin" } ]
  }
)
```

### mongodb configuration option

https://www.mongodb.com/docs/manual/reference/configuration-options/

### Enable Authorization

#### > Update `/etc/mongod.conf` file.

```
security:
   authorization: enabled
```

### TLS Configuration

- https://www.mongodb.com/docs/manual/tutorial/configure-ssl/

### mongodb configuration Reference

- https://www.mongodb.com/docs/manual/reference/configuration-options/