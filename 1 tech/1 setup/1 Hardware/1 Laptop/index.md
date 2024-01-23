---
title: Laptops
---

### My Choice of Laptop

- Thinkpad


### ### How to disable laptop keyboard

```shell
xinput list # `AT Translated Set 2 keyboard` and take note of its id number
xinput float <>
```

### How to re-enable

```shell
xinput list # `AT Translated Set 2 keyboard` and take note of its id number
# Also, take note of the number at the end, [slave keyboard (#)]
xinput reattach <id> <master_id>
```

Ref: https://askubuntu.com/questions/160945/is-there-a-way-to-disable-a-laptops-internal-keyboard