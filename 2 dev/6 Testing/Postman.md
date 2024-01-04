---
title: Postman
---

### postman installation on Ubuntu

1. Install from Ubuntu Software Center.

or 

2. Download the standalone runner and save it in `/opt`

```shell
wget https://dl.pstmn.io/download/latest/linux_64
```

Ref : https://www.postman.com/downloads/

### postman desktop entry

```toml
### Copy to /home/.local/share/applications
[Desktop Entry]
Type=Application
Version=1.0
Name=Postman
Comment=Supercharge your API workflow
Icon=/opt/Postman/app/resources/app/assets/icon.png
Exec="/opt/Postman/Postman"
Terminal=false
```

- https://gist.github.com/hauthorn/d1da427b16133776bd8c65db802bc6ad