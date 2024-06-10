---
title: Variables
---

### Assigning Variables

```shell
var=1
```

You can also `export var=1` to expose the variable to sub-processes.

Ref: https://stackoverflow.com/questions/1158091/defining-a-variable-with-or-without-export


### Accessing variable 

```shell
echo $var
```



### Shell Variables

| variable                 | Meaning                          |
|--------------------------|----------------------------------|
| `$0`                     |                                  |
| `$?`                     | Exit code from last command      |
| `$1` `$2` `$3` and so on | 1st 2nd 3rd parameters and so on |
| `$SHELL`                 | The Shell                        |


### Double Quote vs Single Quote



