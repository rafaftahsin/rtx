---
title: bash
---

### Bash unlimited history

```
# save history to ~/.bash_history as soon as command is run
export PROMPT_COMMAND='history -a'

# save unlimited history
# osx doesn't seem to respect =-1 or = options
export HISTSIZE=9999999999
export HISTFILESIZE=999999999

# osx doesn't actually respect this and it'll fall back to unix timestamp (which we want)
export HISTTIMEFORMAT="%d/%m/%y %T "
```

Ref: https://gist.github.com/hyfen/a866fc010bbc4deedb3d0a360a755f88