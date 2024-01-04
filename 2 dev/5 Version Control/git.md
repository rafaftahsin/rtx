---
title: git
---

### How do I undo 'git add' before commit?

```shell
git reset <file>
```

### How do I undo `git add` after commit ?

- Uncommit the most recent commit 

```shell
git reset --soft HEAD~1
```

- Now undo add with `git reset <file>`

Ref: https://stackoverflow.com/a/15321456/4814427

