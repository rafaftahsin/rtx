---
sidebar_position: 2
title: Loop
---

### one line while loop

  ```shell
  while true; do foo; sleep 2; done
  ```

### Export env variable from .env file.

```shell
while read line; do export $line; done < .env
```

Ref: https://stackoverflow.com/a/43267479/4814427

### for loop

```shell
for i in `seq 1 10`; do echo $i; done
```

Multiline with indentation 

```shell
for i in `seq 1 10`; 
do 
  echo $i; 
done
```

Ref: 
- https://tutorialspoint.com/bash-break-how-to-exit-from-a-loop 
- https://www.cyberciti.biz/faq/bash-for-loop/tutorialspoint.com/bash-break-how-to-exit-from-a-loop 