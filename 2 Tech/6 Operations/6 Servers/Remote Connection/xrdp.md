---
title: xrdp
---

### How to install xrdp on ubuntu ?

```shell
sudo apt install xrdp
sudo systemctl status xrdp
```

You can either share gnome session or xfce session. Now to share gnome session 

```shell
echo "gnome-session" >> ~/.xsession
sudo systemctl restart xrdp
```

For gnome session we didn't need to install gnome destop environment. But for xfce, ubuntu machine doesn't come with a xfce. We need to install it then configure xrdp to use it.

```shell
### Don't run is you use gnome
sudo apt install xfce4
echo "xfce4-session" >> ~/.xsession
```

xrdp config file -> `/etc/xrdp/xrdp.ini`
xrdp log file -> `/var/log/xrdp.log`