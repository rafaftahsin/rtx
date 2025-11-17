---
title: nmcli
---

### How to create a bridge network using nmcli 

```
nmcli connection add type bridge con-name bridge0 ifname bridge0
nmcli connection modify bond0 master bridge0
```


Ref: https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/configuring-a-network-bridge_configuring-and-managing-networking
