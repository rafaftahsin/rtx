---
title: Self Hosted k8s install
---

1. Containerd

https://github.com/containerd/containerd/blob/main/docs/getting-started.md

```
### containerd
wget https://github.com/containerd/containerd/releases/download/v2.1.4/containerd-2.1.4-linux-amd64.tar.gz
tar Cxzvf /usr/local containerd-2.1.4-linux-amd64.tar.gz
# wget https://raw.githubusercontent.com/containerd/containerd/main/containerd.service
# mkdir -p /usr/local/lib/systemd/system
# cp containerd.service /usr/local/lib/systemd/system/
# systemctl daemon-reload
# systemctl enable --now containerd


### runc
wget https://github.com/opencontainers/runc/releases/download/v1.3.2/runc.amd64
install -m 755 runc.amd64 /usr/local/sbin/runc

### CNI Plugin
wget https://github.com/containernetworking/plugins/releases/download/v1.8.0/cni-plugins-linux-amd64-v1.8.0.tgz
mkdir -p /opt/cni/bin
tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.8.0.tgz
# REF: https://github.com/containerd/containerd/blob/main/docs/getting-started.md

# sysctl params required by setup, params persist across reboots
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.ipv4.ip_forward = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system
sysctl net.ipv4.ip_forward

mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml
# Ref: https://www.linkedin.com/pulse/kubernetes-%E0%A6%8F-containerd-configtoml-private-registry-setup-muntakim-2q9nc/

```
