---
title: MySQL
---

### How to create user

```mysql
mysql> CREATE USER 'finley'@'%' IDENTIFIED BY 'some_pass';
```

### GRANT ALL PRIVILEGES ON . TO 'finley'@'%' WITH GRANT OPTION;

Create and grant for locahost

```
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL on *.* TO 'username'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Create user nad grant for 

```
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT ALL on *.* TO 'username'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Ref: 

1. https://serverfault.com/a/1001841


### Delete User

DROP USER 'sheba'@'%';


Ref: https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql

### Allow mysql from remote 

Edit /etc/mysql/mysql.conf.d/mysqld.cnf file.

change `bind-address = 127.0.0.1` to `bind-address = 0.0.0.0`

Ref: https://phoenixnap.com/kb/mysql-remote-connection