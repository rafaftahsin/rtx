---
title: EC2
---

----
### Create Image of an Instance

```shell
aws ec2 create-image \
    --instance-id <i-0123456789abcdef> \
    --name "AMI-Image-Name" \
    --description "AMI Image of EC2 created from Source AWS Account to Destination AWS Account" \
    --region <region-id> \
    --profile <optional-profile>
```

- Ref: https://docs.aws.amazon.com/cli/latest/reference/ec2/create-image.html

----
### Share AMI with Another AWS Account

```shell
aws ec2 modify-image-attribute \
    --image-id <AMI-ID-retrieved-from-above-command> \
    --region <region-id> \
    --launch-permission "Add=[{UserId=<destination-aws-account-id>}]" \
    --profile <profile>
```

- Ref: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html0.

### AWS EC2 SSM Policy 

- `AmazonSSMManagedInstanceCore` *** 
- `AmazonSSMPatchAssociation`

Ref: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/connect-to-an-amazon-ec2-instance-by-using-session-manager.html

### AWS EC2 Image Export

- From Instance - https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport-prerequisites.html
- From AMI - https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites-image-export.html

### AWS Export Command to create image for Oracle or other compatibility

- Create Task

```
aws ec2 create-instance-export-task --instance-id i-yfyufguyhgjh4354 --target-environment vmware --export-to-s3-task DiskImageFormat=vmdk,ContainerFormat=ova,S3Bucket=bucket-name --profile profile-name --region region-name
```

- Describe Task

```
aws ec2 describe-export-tasks --export-task-ids export-i-9486d2dd5b4e4744t --profile profile-name --region region-name
```



