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

### Connect to Cluster

- https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html


### AWS Load Balancer Controller

- Node Security Group Requirements: https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html
- Load Balancer Controller: https://github.com/kubernetes-sigs/aws-load-balancer-controller
- Load Balancer Controller: https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/
- https://github.com/aws/eks-charts/tree/master/stable/aws-load-balancer-controller
- https://docs.aws.amazon.com/eks/latest/userguide/lbc-helm.html

Troubleshooting:

vpcID must be specified otherwise pod fails to get EC2 instance metadata

- https://repost.aws/questions/QU_y5CnTLtRU29NmNGVSthDg/back-off-restarting-failed-container-error-on-pods-running-on-fargate-not-nodegroup

### AWS EKS Auto Mode

- https://catalog.workshops.aws/eks-auto-mode/en-US
- https://docs.aws.amazon.com/eks/latest/userguide/automode.html


### How to get eks config for kubectl

```
aws eks update-kubeconfig --region region-code --name my-cluster
```

Ref: https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html
