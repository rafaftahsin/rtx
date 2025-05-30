---
title: k8s components
---

----
### Container Engine: docker vs containerd
- https://www.youtube.com/watch?v=21onkZfL2yM#Docker

---- 
### `configmap` vs `secret`
- https://www.cloudtruth.com/blog/whats-the-difference-between-configmaps-and-secrets
- https://stackoverflow.com/questions/36912372/kubernetes-secrets-vs-configmaps

----
### What is the difference between Service and Ingress?

---
### Service, LB and Networking
- https://kubernetes.io/docs/concepts/services-networking/

----
### What are the 4 services and their differences?
- https://kubernetes.io/docs/concepts/services-networking/service/

----
### What is stateful set and stateless app ?

----
### What is kubernets operator?

---
### Difference between deployment and replicaset 

----
### Control Plane or Master Node Components

1. kube-apiserver: The Kubernetes API is made available through the Kubernetes control plane component known as kube-apiserver. The Kubernetes control plane’s front end is the API server.
2. etcd: Kubernetes uses etcd as the backing store for all cluster data seeing as it’s a reliable and highly available key-value store.
3. kube-scheduler: The kube-scheduler component of the Control plane is responsible for choosing a node for newly formed Pods with no associated node.
4. kube-controller-manager: Running controller processes is the responsibility of the Control plane component kube-controller-manager.
5. cloud-controller-manager: The cloud controller manager separates the components that communicate with the cloud platform from those that only interface with your cluster and enables you to connect your cluster to the API of your cloud provider.

----
### Worker Machine or Node Components

1. kubelet: The responsibility of kubelet is to make sure that containers are running in a Pod.
2. kube-proxy: Every node in your cluster runs kube-proxy, a network proxy that executes a portion of the Kubernetes Service concept. On nodes, kube-proxy keeps track of network policies. These network rules allow network communication to your Pods from sessions both inside and outside of your cluster.
3. Container runtime: Container runtime is the software responsible for running containers. Containerd and CRI-O are two of the container runtimes that Kubernetes supports besides any other implementation of the Kubernetes CRI.

   - Ref: k8s Arch -> https://www.clickittech.com/devops/kubernetes-architecture-diagram/
   - Ref: https://dev.to/clickit_devops/openshift-vs-kubernetes-the-unfair-battle-6f2 

### Ingress

- https://kubernetes.io/docs/concepts/services-networking/ingress/

### k8s controller vs operator

- https://konghq.com/blog/learning-center/kubernetes-controllers-vs-operators