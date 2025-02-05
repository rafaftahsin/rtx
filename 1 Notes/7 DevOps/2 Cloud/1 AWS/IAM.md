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

### AWS IAM AssumeRole for only Members listed in role 

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::555555555555:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "aws:username": [
            "jecarter",
            "wjclinton",
            "bhobama",
            "jrbiden"
          ]
        },
        "Bool": {
          "aws:MultiFactorAuthPresent": "true"
        }
      }
    }
  ]
}
```

Ref: https://gswallow.medium.com/aws-iam-restrict-sts-assume-role-to-specific-users-4cb308247d7

### S3 Object Access with IP restriction

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:ListBucketVersions",
                "s3:GetBucketLocation",
                "s3:PutObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::example-bucket-name",
                "arn:aws:s3:::example-bucket-name/*",
            ],
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": [
                        "0.0.0.0",
                        "1.1.1.1",
                        "2.2.2.2",
                        "4.4.4.4"
                    ]
                }
            }
        }
    ]
}
```

### AWS S3 Full Access to a single bucket

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:ListAccessPointsForObjectLambda",
                "s3:GetAccessPoint",
                "s3:PutAccountPublicAccessBlock",
                "s3:ListAccessPoints",
                "s3:CreateStorageLensGroup",
                "s3:ListJobs",
                "s3:PutStorageLensConfiguration",
                "s3:ListMultiRegionAccessPoints",
                "s3:ListStorageLensGroups",
                "s3:ListStorageLensConfigurations",
                "s3:GetAccountPublicAccessBlock",
                "s3:ListAllMyBuckets",
                "s3:ListAccessGrantsInstances",
                "s3:PutAccessPointPublicAccessBlock",
                "s3:CreateJob"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::bucket-name/*",
                "arn:aws:s3:::bucket-name"
            ]
        }
    ]
}
```


### System Admin with MFA

