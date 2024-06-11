---
title: Math
sidebar_position: 500
---

### How to add numbers in bash ?

- Use arithmetic expansion: `$((EXPR))`

```shell
num=$((num1 + num2))
num=$(($num1 + $num2))        # Also works
num=$((num1 + 2 + 3))         # ...
num=$[num1+num2]              # Old, deprecated arithmetic expression syntax
```

- Ref:  https://stackoverflow.com/a/6348941/4814427