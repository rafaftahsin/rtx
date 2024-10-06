---
title: IAM
---
----
### Access to single Region

![img.png](img.png)

- Ref: https://www.wellarchitectedlabs.com/cost/200_labs/200_2_cost_and_usage_governance/2_ec2_restrict_region/

----
### Online IAM Policy simulation Tool

- https://policysim.aws.amazon.com/home/index.jsp?#role/eks_sts


### Give Account Wide Readonly Access 

- https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ReadOnlyAccess.html

### Get Policy Information from policy arn

```
aws iam get-policy --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess
{
    "Policy": {
        "PolicyName": "ReadOnlyAccess",
        "PolicyId": "ANPAILL3HVNFSB6DCOWYQ",
        "Arn": "arn:aws:iam::aws:policy/ReadOnlyAccess",
        "Path": "/",
        "DefaultVersionId": "v119",
        "AttachmentCount": 1,
        "PermissionsBoundaryUsageCount": 0,
        "IsAttachable": true,
        "Description": "Provides read-only access to AWS services and resources.",
        "CreateDate": "2015-02-06T18:39:48+00:00",
        "UpdateDate": "2024-09-16T18:53:21+00:00",
        "Tags": []
    }
}
```