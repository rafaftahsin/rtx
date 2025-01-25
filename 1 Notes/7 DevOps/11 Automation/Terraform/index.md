---
title: Terraform
---


### Providers

- Null Provider https://registry.terraform.io/providers/hashicorp/null/latest/docs
- Random Provider https://registry.terraform.io/providers/hashicorp/random/latest/docs

### Random Provider |  Shuffle Resource

```terraform
resource "random_shuffle" "az" {
  input        = ["us-west-1a", "us-west-1c", "us-west-1d", "us-west-1e"]
  result_count = 2
}

resource "aws_elb" "example" {
  # Place the ELB in any two of the given availability zones, selected
  # at random.
  availability_zones = random_shuffle.az.result

  # ... and other aws_elb arguments ...
}
```

### How to save an arbitary value in tf state ?

Save the value as a variable and output the value as output.

### terraform AWS main file example 

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}
```

### How move a resource inside a module using moved block 

#### > Step 1 : Initial Resource

```
# ./lab-demo/s3.tf

resource "aws_s3_bucket" "moved_demo" {
  bucket = "moved-demo"
  tags = {
    env = "lab"
  }
}
```

#### > Step 2 : Create module, Move resource inside module and add `moved` block

`./modules/aws/s3/s3.tf` 

```
# ./modules/aws/s3/s3.tf

resource "aws_s3_bucket" "moved_demo" {
  bucket = "moved-demo"
  tags = {
    env = "lab"
  }
}

```

`./lab-demo/s3.tf` 

```
./lab-demo/s3.tf

module "s3" {
  source = "./modules/aws/s3"
}

moved {
  from = aws_s3_bucket.moved_demo
  to   = module.s3.aws_s3_bucket.moved_demo
}
```

Run `terraform plan` it will not show any destroy operation. Run `terraform apply` when you are sure that terraform didn't show any destroy operation.

#### > Step 3 : Remove the `moved` block

`./modules/aws/s3/s3.tf` 

```
# ./modules/aws/s3/s3.tf

resource "aws_s3_bucket" "moved_demo" {
  bucket = "moved-demo"
  tags = {
    env = "lab"
  }
}

```

`./lab-demo/s3.tf` 

```
./lab-demo/s3.tf

module "s3" {
  source = "./modules/aws/s3"
}
```

Ref: https://tanmay-bhat.github.io/posts/how-to-move-a-terraform-resource-into-a-module-using-moved-block/#:~:text=Move%20a%20Resource%20Into%20Module,demo%2Fs3.tf%20file.&text=Since%20we%20have%20the%20resource,demo%2Fmain.tf%20file.
