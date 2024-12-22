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

- `AmazonSSMManagedInstanceCore`
- `AmazonSSMPatchAssociation`

