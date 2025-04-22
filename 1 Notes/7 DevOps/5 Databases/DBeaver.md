---
title: DBeaver
---

### Show All Database

1. Right-click on your connection
2. Click "Edit connection"
3. Left panel, click "Connection settings"
4. Select PostgreSQL tab Check the box "Show all databases"

- Ref: https://stackoverflow.com/a/74572219/4814427

### Error `public key retrieval is not allowed`

1. Right click your connection, choose "Edit Connection"
2. On the "Connection settings" screen (main screen) click on "Edit Driver Settings"
3. Click on "Connection properties", (In recent versions it named "Driver properties")
4. Modify "allowPublicKeyRetrieval" field under "Driver Properties" from False to True

Ref: https://stackoverflow.com/a/59778108/4814427

### How to decrypt dbeaver password

```
openssl aes-128-cbc -d -K babb4a9f774ab853c96c2d653dfe544a -iv 00000000000000000000000000000000 -in "${HOME}/Library/DBeaverData/workspace6/General/.dbeaver/credentials-config.json" | dd bs=1 skip=16 2>/dev/null
```

Ref: https://gist.github.com/felipou/50b60309f99b70b1e28f6d22da5d8e61?permalink_comment_id=3913499#gistcomment-3913499