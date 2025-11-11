---
title: Kubectl
---

### install kubectl 

```shell
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client
rm kubectl
```

Ref: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

### Difference between `kubectl attach` vs `kubectl exec` 

The use cases for kubectl attach are discussed in kubernetes/issue 23335.

It can attach to the main process run by the container, which is not always bash.
As opposed to exec, which allows you to execute any process within the container (often: bash)

Ref: https://stackoverflow.com/a/50031131/4814427

https://kubernetes.io/docs/reference/kubectl/generated/kubectl_attach/


### kubectl port-forward

```
kubectl port-forward pods/redis-master-765d459796-258hz 6379:6379
kubectl port-forward deployment/redis-master 6379:6379 
kubectl port-forward rs/redis-master 6379:6379 
kubectl port-forward svc/redis-master 6379:6379
```

Ref: https://stackoverflow.com/a/51469150/4814427
https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/

### kubectl scale

Set a new size for a deployment, replica set, replication controller, or stateful set.