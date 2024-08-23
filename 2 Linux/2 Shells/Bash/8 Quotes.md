---
title: Quoting
sidebar_position: 800
---


### Quoting

| Quote Type                  | Syntax      |                        | Usecase                                    | Output                              |
|-----------------------------|-------------|------------------------|--------------------------------------------|-------------------------------------|
| Escape character            | `\`         |                        | `echo "I'm a double quote \""`             | `I'm a double quote "`              |
| Single Quote                | `'string'`  |                        | `echo '$(echo hello) from the other side'` | `$(echo hello) from the other side` |
| Double Quote                | `"string"`  | Evaluates expression   | `echo "$(echo hello) from the other side"` | `hello from the other side`         |
| ANSI-C Quoting              | `$'string'` | Enables ANSI-C Quoting | `echo $'1\n2\n3\n4'`                       | <pre>1<br/>2<br/>3<br/>4<br/></pre> |
| Locale-Specific Translation | `$"string"` |                        |                                            |                                     |

Ref: https://www.gnu.org/software/bash/manual/html_node/Quoting.html