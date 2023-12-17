---
title: aws cli
---

#### How to install `aws` on linux

```shell
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

#### cli command completion
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html

#### aws-cli login with MFA

- https://stackoverflow.com/a/61490884

#### Export profile credentials to environemt

```shell
AWS_PROFILE=prfname

echo "# Environment for AWS profile '$AWS_PROFILE'"
export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile $AWS_PROFILE)
export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile $AWS_PROFILE)
export AWS_DEFAULT_REGION=$(aws configure get region --profile $AWS_PROFILE)
```

=> you can also make a script. Ref: https://gist.github.com/mjul/f93ee7d144c5090e6e3c463f5f312587