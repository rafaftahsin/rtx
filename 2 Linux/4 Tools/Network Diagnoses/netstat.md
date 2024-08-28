---
title: netstat
---

### Used to see network statistics

```shell
$ netstat -ntlp
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 192.168.122.1:53        0.0.0.0:*               LISTEN      -                   
tcp        0      0 0.0.0.0:17500           0.0.0.0:*               LISTEN      3156/dropbox        
tcp        0      0 127.0.0.1:17600         0.0.0.0:*               LISTEN      3156/dropbox        
tcp        0      0 127.0.0.1:17603         0.0.0.0:*               LISTEN      3156/dropbox        
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      -                   
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -                   
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      -                   
tcp        0      0 127.0.0.1:3000          0.0.0.0:*               LISTEN      156692/node         
tcp6       0      0 127.0.0.1:63343         :::*                    LISTEN      14619/pycharm       
tcp6       0      0 127.0.0.1:63342         :::*                    LISTEN      155728/webstorm     
tcp6       0      0 :::1716                 :::*                    LISTEN      3042/kdeconnectd    
tcp6       0      0 :::17500                :::*                    LISTEN      3156/dropbox        
tcp6       0      0 :::22                   :::*                    LISTEN      -                   
tcp6       0      0 127.0.0.1:52829         :::*                    LISTEN      3810/./jetbrains-to 
tcp6       0      0 ::1:631                 :::*                    LISTEN      -                   

```