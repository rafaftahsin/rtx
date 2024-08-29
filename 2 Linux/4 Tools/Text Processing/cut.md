---
title: cut
---

### print specific character with `-c`

```shell
$ cat inp 
Hello
World
how are you
$ cat inp | cut -c3
l
r
w
$ cat inp | cut -c2,7
e
o
oe
$ cat inp | cut -c2-7
ello
orld
ow are
$ cat inp | cut -c-4
Hell
Worl
how
```

### 