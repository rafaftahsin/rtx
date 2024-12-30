---
title: RDS
---

### DB Parameter group

See only changed parameters in a cluster parameter group

```
aws rds describe-db-cluster-parameters --db-cluster-parameter-group-name <Cluster_PG_name> --region <region> --query "Parameters[?Source=='user' || ApplyMethod=='immediate'].[ParameterName]" --output text
```

See only changed parameters in a db parameter group

```
aws rds describe-db-parameters --db-parameter-group-name <PG_name> --region <region> --query "Parameters[?Source=='user' || ApplyMethod=='immediate'].[ParameterName]" --output text
```

aws rds describe-db-parameters --db-parameter-group-name accounting-param-group --query "Parameters[?Source=='user' || ApplyMethod=='immediate'].[ParameterName]" --output text

Ref: https://repost.aws/knowledge-center/rds-identify-modified-parameters


### AWS RDS SQL Server option group to enable Backup & Restore

- SQLSERVER_BACKUP_RESTORE 

Ref: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.BackupRestore.html