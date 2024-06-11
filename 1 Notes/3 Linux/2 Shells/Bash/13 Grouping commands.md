---
title: Grouping commands
sidebar_position: 1300
---

### `( list )`

- Runs in subshell.
- Since the list is executed in a subshell, variable assignments do not remain in effect after the subshell completes.

### `{ list; }`

- Run in current shell context.

Ref: https://www.gnu.org/software/bash/manual/html_node/Command-Grouping.html