---
title: MSSQL
---

### Docker

- https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&tabs=cli&pivots=cs1-bash

### mssql linux cli

sqlcmd -S tcp:asdfsadf.ap-southeast-1.rds.amazonaws.com,1433 -U admin -P asdfasdf -C


https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.CreateUser.html

CREATE LOGIN username WITH PASSWORD = 'P455W0RD';

sqlcmd -S tcp:hostname,1433 -U username -P P455W0RD -C

### Install MSSQL Server on ubuntu

https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16&tabs=ubuntu2004

### Change conf with environment variable 

https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-configure-environment-variables?view=sql-server-linux-ver15

### MSSQL DUMP

- https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-backup-and-restore-database?view=sql-server-ver16



### MSSQL Server Linux - SA Password change 

```
/opt/mssql/bin/mssql-conf set-sa-password
```

Ref: https://www.sqlservercentral.com/blogs/reset-sa-password-on-sql-server-on-linux

### MSSQL Replication Policy and replica Server 

- Availability Group - https://www.youtube.com/watch?v=BqgbzsDQMXY
- Failover Cluster - https://www.youtube.com/watch?v=BqgbzsDQMXY&t=4s
- Replication Server - https://www.youtube.com/watch?v=0eW6XO0DDEo&t=78s