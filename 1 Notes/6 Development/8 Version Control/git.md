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

### How to store secret or encrypt some file in git repository

- https://github.com/AGWA/git-crypt
- https://dev.to/heroku/how-to-manage-your-secrets-with-git-crypt-56ih

Ref: https://stackoverflow.com/questions/48330742/file-encryption-in-git-repository

### How to delete a branch 

Remote: `git push -d <remote_name> <branchname>`
Local: `git branch -d <branchname>`

Ref: https://stackoverflow.com/a/2003515

### `git` re add deleted file

`git checkout HEAD src/path/file`

Ref: https://stackoverflow.com/a/22976202/4814427

### How revert to a previous commit in remote

https://hackernoon.com/how-to-delete-commits-from-remote-in-git

### git flow 

- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

### git rebase

- https://git-scm.com/docs/git-rebase

### Encryption inside git 

- To encrypt some specific file 
  - git-crypt
- Encrypt full repository 
  - git-remote-gcrypt

### Large File in git

- https://git-lfs.com/
