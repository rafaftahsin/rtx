---
title: Expansions
sidebar_position: 700
---

### variable and parameter expansion `${}`

`string=01234567890abcdefgh`

| Syntax             | Output         | Explanation                                           |
|--------------------|----------------|-------------------------------------------------------|
| `${string:7}`      | `7890abcdefgh` | Starting from index 7 [Index starts from 0]           |
| `${string:7:0}`    | ` `            | 0 character starting from index 7                     |
| `${string:7:2}`    | `78`           | 2 character starting from index 7                     |
| `${string:7:-2}`   | `7890abcdef`   | From 7th character to (last-2) character              |
| `${string: -7}`    | `bcdefgh`      | from (last-7)th character to end                      |
| `${string: -7:0}`  | ` `            | 0 character starting from (last-7)th character to end |
| `${string: -7:2}`  | `bc`           | 2 character starting from (last-7)th character to end |
| `${string: -7:-2}` | `bcdef`        | from (last-7)th character to (last-2) character       |
| `${#string}`       | `19`           | Length                                                |

Ref: https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html

N:B: substring expansions with `@` or `*` can be used with arrays.

---
### `~` Expansion

`~` expands to the value of `$HOME`

More about `~` expansion at https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html

---
### Brace `{ }` Expansion 
```shell
echo a{d,c,b}e
ade ace abe
```

Or

```shell
mkdir /usr/local/src/bash/{old,new,dist,bugs}
```

More about brace expansion at https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html