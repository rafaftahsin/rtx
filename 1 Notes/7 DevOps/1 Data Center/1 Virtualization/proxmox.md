---
title: proxmox
---

### Install `Qemu-guest-agent` in VM to get VM information

- Install 
- Then enable Quemu Guest Agent from VM Manager 

Ref: https://pve.proxmox.com/wiki/Qemu-guest-agent


#### Proxmox Terraform provider 

- https://registry.terraform.io/providers/Telmate/proxmox/latest/docs

### Fatal glibc error: CPU does not support x86-64-v2

change the CPU type of VM 
> Hardware section> processors> Type= "host" instead of "x86-64-v2"

### Performance tweaks

https://pve.proxmox.com/wiki/Performance_Tweaks


### How to change password of a guest vm using `qm`



#### pve doc

- https://pve.proxmox.com/pve-docs/pve-admin-guide.html#intro_central_management

### CLI Tools

- https://pve.proxmox.com/wiki/Command_Line_Tools


### Disk Resize 

- https://pve.proxmox.com/wiki/Resize_disks