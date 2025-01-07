---
sidebar_position: 1
title: KVM
---

### change root password of a vm 

- virt-customize -a /var/lib/vz/images/101/vm-101-disk-0.qcow2 --root-password password:topSecretPassword

Ref :https://libguestfs.org/virt-customize.1.html
