---
title: ECR
---

### docker login to AWS ECR

```shell
aws ecr get-login-password --region region | docker login \
   --username AWS --password-stdin \
   aws_account_id.dkr.ecr.region.amazonaws.com
   
# Example

aws ecr get-login-password --region ap-southeast-1 | podman login \
   --username AWS --password-stdin \
      105638660012.dkr.ecr.ap-southeast-1.amazonaws.com
```

- Ref: https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html

