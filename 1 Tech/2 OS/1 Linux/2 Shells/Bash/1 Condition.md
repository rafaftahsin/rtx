---
sidebar_position: 1
title: Conditions
---

1. If any command runs successfully inside if conditional expression then if treats it as true.

```shell
if print; then echo "foo"; else echo "bar"; fi
```

2. There's a command called test to evaluate conditional expression.

```shell
if test $a -ge $b;
then
  echo "a is bigger";
else
  echo "b is bigger";
fi
```

see the test command ? It evaluates the conditional expression and return true / false base on the evaluation.

3. test is later replaced with `[`.

```shell
if [ $a -ge $b ];
then
  echo "a is big";
else
  echo "b is big";
fi
```


Yes, the command is `[` and it starts evaluating the expression until it gets `]`. You can check it yourself with `which [` or even `man [`. `[` is basically another representation of test command.

4. There's some limitations of using `[` or `test`. For example, it can't evaluate `&&`, `||`. So here comes `[[` with improvements.

```shell
if [[ $a > $b || $a == $b ]]; 
then 
  echo "a is big"; 
else 
  echo "b is big"; 
fi
```

You can also read more about the differences between `[` and `[[` from [here](https://stackoverflow.com/questions/3427872/whats-the-difference-between-and-in-bash).

5. There's no ternary operator in bash. But there's a hack ...

```shell
[[ $a == $b ]] && echo "Equal" || echo "Not equal"
```
