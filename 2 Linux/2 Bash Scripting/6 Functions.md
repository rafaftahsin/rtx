---
title: Functions
sidebar_position: 600
---

### Defining functions

```shell
function_name () {
  commands
}
```

or 

```shell
function function_name {
  commands
}
```

### Function return value

```shell
#!/bin/bash

my_function () {
  echo "some result"
  return 55
}

my_function
echo $?
```

Output: 

```text
some result
55
```

### Function parameter

```shell
#!/bin/bash

greeting () {
  echo "Hello $1"
}

greeting "Joe"
```

Output: 

```bash
Hello Joe
```

Ref: https://linuxize.com/post/bash-functions/

