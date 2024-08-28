---
title: ss
---

### displays socket statistics

```shell
$ ss -ntlp
State              Recv-Q             Send-Q                              Local Address:Port                          Peer Address:Port            Process                                                 
LISTEN             0                  32                                  192.168.122.1:53                                 0.0.0.0:*                                                                       
LISTEN             0                  128                                       0.0.0.0:17500                              0.0.0.0:*                users:(("dropbox",pid=3156,fd=67))                     
LISTEN             0                  128                                     127.0.0.1:17600                              0.0.0.0:*                users:(("dropbox",pid=3156,fd=83))                     
LISTEN             0                  128                                     127.0.0.1:17603                              0.0.0.0:*                users:(("dropbox",pid=3156,fd=91))                     
LISTEN             0                  5                                       127.0.0.1:631                                0.0.0.0:*                                                                       
LISTEN             0                  128                                       0.0.0.0:22                                 0.0.0.0:*                                                                       
LISTEN             0                  4096                                127.0.0.53%lo:53                                 0.0.0.0:*                                                                       
LISTEN             0                  511                                     127.0.0.1:3000                               0.0.0.0:*                users:(("node",pid=156692,fd=26))                      
LISTEN             0                  4096                           [::ffff:127.0.0.1]:63343                                    *:*                users:(("pycharm",pid=14619,fd=61))                    
LISTEN             0                  4096                           [::ffff:127.0.0.1]:63342                                    *:*                users:(("webstorm",pid=155728,fd=59))                  
LISTEN             0                  50                                              *:1716                                     *:*                users:(("kdeconnectd",pid=3042,fd=21))                 
LISTEN             0                  128                                          [::]:17500                                 [::]:*                users:(("dropbox",pid=3156,fd=63))                     
LISTEN             0                  128                                          [::]:22                                    [::]:*                                                                       
LISTEN             0                  50                             [::ffff:127.0.0.1]:52829                                    *:*                users:(("jetbrains-toolb",pid=3810,fd=75))             
LISTEN             0                  5                                           [::1]:631                                   [::]:*                                                                       
```