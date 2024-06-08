---
title: Kubernetes
---

----
#### 

How to communicate two pods over different namespace 

The path of reaching a pad from your browser ... the lifecycle of a request

Ingress

Service 

help ... manifest file 

### Services That Runs in Master 

- CoreDNS
- etcd
- kube-api-server
- kube-controller-manager
- kube-proxy
  - Run on every node and perform TCP/UDP packet forwarding accross backend network service. 
- kube-scheduler
  - Kube-scheduler distributes and manages the workload on the worker nodes. It uses various policies to select the most suitable node for a pod based on factors such as resource requirements, node capacity, and pod affinity/anti-affinity. The kube-scheduler component is also responsible for binding the selected node to the pod and updating the Kubernetes API server with the updated information.
- storage-provisioner
  - asdf

### Horizontal Auto Scaling vs Vertical Pod Autoscaling 

### kubelet 

### Differernt type k8s service 

- Cluster IP 
  - Kubernetes assigns a virtual IP address to a ClusterIP service that can solely be accessed from within the cluster during its creation. 
- 
Ref: https://www.baeldung.com/ops/kubernetes-service-types

