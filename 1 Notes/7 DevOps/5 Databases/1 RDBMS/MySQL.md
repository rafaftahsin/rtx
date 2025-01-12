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

### What is TableSpace in mysql?

https://stackoverflow.com/a/39116665/4814427


### How to install on ubuntu 

https://ubuntu.com/server/docs/install-and-configure-a-mysql-server

### MySQL Timezone 

```
mysql> select now();
```

Ref: https://stackoverflow.com/questions/930900/how-do-i-set-the-time-zone-of-mysql


### Delete all rows from a table 

```
DELETE FROM <table-name>;
```

Ref: https://www.w3schools.com/sql/sql_delete.asp