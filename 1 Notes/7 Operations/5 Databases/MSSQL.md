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

