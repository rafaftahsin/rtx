---
title: Cognito
---

----
### Backup and Restore

- https://www.npmjs.com/package/cognito-backup-restore

----
### cognito password change with confirm

```shell
aws cognito-idp admin-set-user-password --user-pool-id us-west-2_JhIk2DD1m --username <username> --password '<password>' --permanent --profile <prfl> --region <rgn>
```
