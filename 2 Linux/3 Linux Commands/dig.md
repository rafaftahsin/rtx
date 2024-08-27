---
title: dig
---

dig analyzes dns entry

```shell
$ dig rfft.nl

; <<>> DiG 9.18.28-0ubuntu0.20.04.1-Ubuntu <<>> rfft.nl
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 49433
;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;rfft.nl.			IN	A

;; ANSWER SECTION:
rfft.nl.		59	IN	A	185.199.109.153
rfft.nl.		59	IN	A	185.199.108.153
rfft.nl.		59	IN	A	185.199.111.153
rfft.nl.		59	IN	A	185.199.110.153

;; Query time: 100 msec
;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)
;; WHEN: Tue Aug 27 18:16:24 +06 2024
;; MSG SIZE  rcvd: 100
```

### You can specify dns server with `@`

```shell
dig example.com. @ns-master.example.com
```

### `+short` echos only the IP address

```shell
$ dig +short rfft.nl
185.199.108.153
185.199.111.153
185.199.110.153
185.199.109.153
```

### References

- https://serverfault.com/questions/740245/how-to-find-what-authoritative-name-server-provided-the-answer-using-dig

