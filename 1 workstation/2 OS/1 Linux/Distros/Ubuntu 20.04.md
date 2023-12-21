---
title: Ubuntu 20.04
---

### Desktop File Example

```shell
$ cat ~/.local/share/applications/Appname.desktop 
### Copy to /home/.local/share/applications
[Desktop Entry]
Type=Application
Version=1.0
Name=Appname
Comment=Manage pgp keys
Icon=/home/rafaf.tahsin/Pictures/App-Icon.png
Exec="/opt/Appname.AppImage"
Terminal=false
```

Ref: https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html

