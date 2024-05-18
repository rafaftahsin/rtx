---
title: Ruby
---

----
| Feature                | Tool                                                   |
|------------------------|--------------------------------------------------------|
| Language               | Ruby                                                   |
| MVC FrameWork          | Rails                                                  |
| Other Web Framework    |                                                        |
| ORM                    | Active Record                                          |
| DB Access Library      |                                                        |
| IDE                    | RubyMine                                               |
| Server                 | rack                                                   |
| Package Manager        | gem                                                    |
| Related Other Tools    |                                                        |
| Artifactory Repository |                                                        |
| Test                   |                                                        |
| Web App                | [Rails Tutorial](https://www.railstutorial.org/book/)  |
| Tutorial               |                                                        |

### How to install `ruby` on ubuntu

- install `rbenv`

```shell
sudo apt update
sudo apt install git curl autoconf bison build-essential \
    libssl-dev libyaml-dev libreadline6-dev zlib1g-dev \
    libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
```

- Shell config

```shell
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
```

- check if rbenv works fine

```shell
rbenv -v
```

- list of ruby versions can be installed by `rbenv`

```shell
rbenv install -l
```

- Install ruby wiht `rbenv`

```shell
rbenv install 3.0.6
```

- Make the newly installed ruby global

```shell
rbenv global 3.0.6
```

Ref: https://linuxize.com/post/how-to-install-ruby-on-ubuntu-20-04/