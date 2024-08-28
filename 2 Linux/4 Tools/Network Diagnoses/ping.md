---
title: ping
---

### ping diagnose reachability via ICMP protocol

```shell
ping google.com
PING google.com (142.250.194.142) 56(84) bytes of data.
64 bytes from del12s05-in-f14.1e100.net (142.250.194.142): icmp_seq=1 ttl=111 time=88.6 ms
64 bytes from del12s05-in-f14.1e100.net (142.250.194.142): icmp_seq=2 ttl=111 time=87.5 ms
64 bytes from del12s05-in-f14.1e100.net (142.250.194.142): icmp_seq=3 ttl=111 time=87.6 ms
^C
--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 87.507/87.909/88.647/0.522 ms
```