---
title: "My .gitconfig"
date: "2020-09-03"
spoiler: I promise one day I will read the docs.
---

**.gitconfig** is a file that stores your options/preferences, it can be located in several places but commonly we only modify the one at `~/.gitconfig`.

Mine is nothing extraordinary:

```git
[user]
    name = Marcelo Fernandes
    email = marcelo.schreiber@gmail.com
[alias]
    branch-name = "!git rev-parse --abbrev-ref HEAD"
    publish = "!git push -u origin $(git branch-name)"
[help]
    autocorrect = 1
[core]
    editor = vim
[sequence]
    editor = rebase-editor
```

Main points:

- **alias.publish**: This alias allows me to `git checkout -b my-new-feature`, code the feature, commit and then `git publish` to push to remote while creating a branch also callled **my-new-feature** on remote
- **helper.autocorrect**: If I mistype something it will try to understand what I was doing and if it succeeds it will execute the command
- **core.editor**: editor used for writing commits or tags
- **sequence.editor**: editor that will be used while performing a `git rebase -i`

Refer to the [full documentation](https://git-scm.com/docs/git-config) for more options. It's very big and I will wait a few more years before reading it :p
