---
title: MS SQL Server
---

### MS SQL server linux client

- [`sqlcmd`](https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver16&tabs=ubuntu-install)

### MS SQL Server docker 

- https://hub.docker.com/r/microsoft/mssql-server

### Install SQL server on ubuntu

https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16&tabs=ubuntu2004#cross-platform-data-tools

### MSSQL Server Configuration

https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-configure-mssql-conf?view=sql-server-linux-ver15#tls

### Connect to SQL Server with sqlcmd

https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-connect-database-engine?view=sql-server-ver16


### Docker

- https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&tabs=cli&pivots=cs1-bash

### mssql linux cli

```
sqlcmd -S tcp:asdfsadf.ap-southeast-1.rds.amazonaws.com,1433 -U admin -P asdfasdf -C
```

Ref: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.CreateUser.html

```
CREATE LOGIN username WITH PASSWORD = 'P455W0RD';
```

```
sqlcmd -S tcp:hostname,1433 -U username -P P455W0RD -C

```
Ref: https://www.sqlservercentral.com/blogs/reset-sa-password-on-sql-server-on-linux

### Install MSSQL Server on ubuntu

https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16&tabs=ubuntu2004

### Change conf with environment variable 

https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-configure-environment-variables?view=sql-server-linux-ver15

### MSSQL DB Backup

```
sqlcmd -S <host> -U sa -Q "BACKUP DATABASE db_name TO DISK = N'/var/opt/mssql/data/db_name.bak';"
```

Differential Backup 

```
sqlcmd -S <host> -U sa -Q "BACKUP DATABASE db_name TO DISK = N'/var/opt/mssql/data/db_name.bak' WITH DIFFERENTIAL;"
```

- https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-backup-and-restore-database?view=sql-server-ver16
- https://sqlbak.com/blog/how-to-backup-and-restore-sql-server-on-linux/


### Restore DB from Backup


```
sqlcmd -S <host> -U sa -Q "RESTORE DATABASE db_name FROM DISK = './db_name.bak';"
```

If you are going to continue with restoring differential or transaction log backups after that, you need to add the `NORECOVERY` option. This will leave the backup process in a restoring state and allow you to restore extra differential or transaction log backups.

```
sqlcmd -S <host> -U sa -Q "RESTORE DATABASE db_name FROM DISK = './db_name.bak' WITH NORECOVERY;"
```

Insight: 

#### > The file 'D:\Adventureworks_full.bak' must be in the host where DB is running. 

For DB Hosted in linux platform, if you specify `FROM DISK = './Adventureworks_full.bak'`, it will try to open `/var/opt/mssql/data/Adventureworks_full.bak`


#### > Error while restoring: `The backup set holds a backup of a database other than the existing`

Use: `WITH REPLACE`

Ref: https://stackoverflow.com/questions/10204480/sql-server-the-backup-set-holds-a-backup-of-a-database-other-than-the-existing

#### > To Restore DB from Windows to Linux 

```
sqlcmd -S <host> -U sa -Q "RESTORE DATABASE db_name FROM DISK = './db_name.bak' WITH REPLACE, MOVE 'db_name' TO '/var/opt/mssql/data/db_name.mdf', MOVE 'db_name_Log' TO '/var/opt/mssql/data/db_name_Log.ldf';"
```
- https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-migrate-restore-database?view=sql-server-ver16

### MSSQL Server Linux - SA Password change 

```
/opt/mssql/bin/mssql-conf set-sa-password
```

### MSSQL Replication Policy and replica Server 

- Availability Group - https://www.youtube.com/watch?v=BqgbzsDQMXY
- Failover Cluster - https://www.youtube.com/watch?v=BqgbzsDQMXY&t=4s
- Replication Server - https://www.youtube.com/watch?v=0eW6XO0DDEo&t=78s


### Trust Certificate 

`-C`

### MSSQL Connection String URI

`sqlserver://<host>:1433`

Use other port if you don't run with default 1433 port

### SQL DB Size

- https://sqlconjuror.com/sql-server-get-size-of-all-databases-in-mb-and-gb/

### Timezone of MSSQL Server

```
SELECT CURRENT_TIMEZONE();
```

Ref: https://learn.microsoft.com/en-us/sql/t-sql/functions/current-timezone-transact-sql?view=sql-server-ver16

### MSSQL Timezone configuration 

https://stackoverflow.com/questions/62123305/change-default-sql-server-timezone-on-linux

### How to change timezone in mssql-server on linux

[Here's the sequence, mssql-server on linux reads to retrieve timezone information](https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-configure-time-zone?view=sql-server-ver16)

- the `TZ` environment variable, if set;
- the `/etc/localtime` symbolic link, if it exists;
- the value `/etc/timezone`, if the file exists;
- the ZONE= attribute from `/etc/sysconfig/clock`, if they exist.

So, You can change `/etc/localtime` symbolic link to your desired timezone. For me it was `Asia/Dhaka`.

```
ln -s /usr/share/zoneinfo/Asia/Dhaka /etc/localtime
```

Now restart mssql-server. It should work.

```
systemctl restart mssql-server
```

P.S. I went extra far and edited `/etc/timezone` too before I restarted mssql-server. You can try that if above doesn't work.

Ref: 

- https://stackoverflow.com/a/79386977/4814427
- https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-configure-time-zone?view=sql-server-ver16