---
title: Canon LBP6030w
---

### How to install Canon lbp6030w printer on ubuntu 20.20

-  Download driver from http://support-asia.canon-asia.com/contents/ASIA/EN/0100595001.html

- Run the following commands to extract and install the driver

```shell
cd Downloads
https://gdlp01.c-wss.com/gds/0/0100005950/10/linux-UFRIILT-drv-v500-uken-18.tar.gz
tar -zxvf linux-UFRIILT-drv-v140_uken.tar.gz
cd linux-UFRIILT-drv-v140_uken
sudo ./install.sh
```

- During install you need to register the printer. If the printer is connected via wifi make sure your computer and the printer are in same network. Use the following command to find the uri of the printer

```shell
sudo lpinfo -l -v |  perl -ne 'print if /^Device: uri = socket:/ .. /info/'
```

- Output should be something like this

```shell
Device: uri = socket://192.168.0.147
        class = network
        info = Canon LBP6030w/6018w
```

- Reference:
  - https://askubuntu.com/a/995322/428566 [Installation]
  - https://superuser.com/a/1170797/514114 [Finding IP Address of printer]