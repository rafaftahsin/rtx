---
title: Avro Keyboard
---

### How to install `avro-keyboard` on ubuntu ?

```shell
sudo apt install ibus-avro
```

### Restart system or Log out - Log in

- Go to Settings > Keyboard (Settings > Region & Language in 20.04)
- In Input Sources click +
- Click Bangla or Bangla (Bangladesh)
- Finally select Bangla (Avro Phonetic)
- Now it should work just fine.
- If not make sure your Keyboard Input Method System is > IBus

### Common Problem

Avro Stops writing Bangla. Try to restart ibus.

```shell
ibus restart
```

Ref: https://askubuntu.com/a/1280906
