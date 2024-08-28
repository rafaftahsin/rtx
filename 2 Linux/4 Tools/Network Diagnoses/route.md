---
title: route
---

### Display IP routing table

```shell
$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.2.1     0.0.0.0         UG    100    0        0 enp4s0
169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 virbr0
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
172.18.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-88e8a7f51ff1
192.168.2.0     0.0.0.0         255.255.255.0   U     100    0        0 enp4s0
192.168.49.0    0.0.0.0         255.255.255.0   U     0      0        0 br-54e9d7e83110
192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0
```