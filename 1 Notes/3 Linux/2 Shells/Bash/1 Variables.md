---
title: Variables
sidebar_position: 100
---

### Assigning Variables

```shell
var=1
echo $var # var is the variable, $var is the value
```

N:B: 

- Do not confuse this with `=` and `-eq`, which `test`, rather than assign! so ... `var = 1` won't work. Mind the Gap!!!

- [Bash Variables Are Untyped](https://tldp.org/LDP/abs/html/untyped.html)

- [To expose the variable to sub-processes use `export`.](https://stackoverflow.com/a/1158268)

```shell
$ export foo="Hello, World"
$ bar="Goodbye"

$ echo $foo
Hello, World
$ echo $bar
Goodbye

$ bash
bash-3.2$ echo $foo
Hello, World
bash-3.2$ echo $bar

bash-3.2$ 
```

### Shell Variables

| variable                 | Meaning                          |
|--------------------------|----------------------------------|
| `$0`                     |                                  |
| `$?`                     | Exit code from last command      |
| `$1` `$2` `$3` and so on | 1st 2nd 3rd parameters and so on |
| `$SHELL`                 | The Shell                        |
| `$HOME`                  | User Home directory              |
| `$USER`                  | Shell Username                   |




