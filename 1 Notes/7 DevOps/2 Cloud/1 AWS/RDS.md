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

### How to do backup RDS MSSQL DB to S3 

```
exec msdb.dbo.rds_backup_database
	@source_db_name='db_name',
	@s3_arn_to_backup_to='arn:aws:s3:::bucket_name/db_name.bak',	
	@overwrite_s3_backup_file='0|1',
	@type='FULL|DIFFERENTIAL',
	@number_of_files='#numberOfFiles';
```

- Ref: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.Native.Using.html#SQLServer.Procedural.Importing.Native.Using.Backup

Track progress ... 

```
exec msdb.dbo.rds_task_status
	@db_name='db_name',
	@task_id='#task_id';
```