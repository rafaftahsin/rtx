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