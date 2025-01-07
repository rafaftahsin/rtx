---
title: EKS
---

----
### Tags for subnet for LB to be created

- private subnets - `kubernetes.io/role/internal-elb` value = `1`
- public subnets - `kubernetes.io/role/elb` value = `1` 

Ref: https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html

----
### Provision EKS Cluster

- With Terraform
  - https://developer.hashicorp.com/terraform/tutorials/kubernetes/eks
- With `eksctl`
  - https://eksctl.io/usage/creating-and-managing-clusters/
  - https://dev.to/aws-builders/creating-an-amazon-eks-cluster-from-scratch-using-eksctl-540i
  - https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

----
### create your kubeconfig file with the AWS CLI
```shell
aws eks update-kubeconfig --region region-code --name my-cluster
```
- Ref: https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html