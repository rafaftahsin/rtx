---
title: Redirections
sidebar_position: 600
---

in Linux, everything is treated as a file, and input and output are no exception. The OS assigns identifiers called file descriptors to represent these files. In the bash shell, the first three descriptors are reserved with specific IDs for these standard streams. They are,

0 (represents STDIN)
1 (represents STDOUT)
2 (represents STDERR)


### `>`

Redirects standard output (stdout) to a file. If the file already exists, its contents will be overwritten.

```shell
whoami > output.txt
```
---

### `>>` 

Redirects stdout to a file but appends the output to the end of the file if it already exists.

### `<`

Redirects standard input (stdin) to a command from a file. The command will read input from the specified file.

### `2>` 

Redirects standard error (stderr) to a file. Error messages produced by the command will be written to the specified file.

### `2>>`

Redirects stderr to file, but appends the error messages to the end of the file if it already exists.

### `&>` or `>&`

Redirects both stdout and stderr to the same location. This operator is equivalent to using both ‘>file’ and ‘2>file’.

### `>>&` or `&>>`

Redirects both stdout & stderr to the same file, but appends the output to the end of the file if it already exists.

### `<<`

Represents ‘Here Document’, which allows you to provide input to a command within the script without needing an external file.

### `<<<`

Represents ‘Here String’, which allows you to provide a string as the input to a command.


### `2>&-`

Tells Bash to close or discard the stderr stream in a Bash shell.


### `>|`

Forces redirection to a file, even if the noclobber option (prevents accidental overwriting of existing files) is set.

### `|` and `|&`

- If ‘|&’ is used, command1’s standard error, in addition to its standard output, is connected to command2’s standard input through the pipe; it is shorthand for 2>&1 |.
