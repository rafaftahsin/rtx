---
title: boost
---

### boost cpp library

- https://www.boost.org/

### `CMakeFile` script for boost in linux

```
set(Boost_INCLUDE_DIR /opt//opt/boost_1_84_0)
find_package(Boost 1.84.0)
include_directories(${Boost_INCLUDE_DIR})
```

Ref: 

- https://cmake.org/cmake/help/latest/module/FindBoost.html
- https://stackoverflow.com/questions/36519453/setup-boost-in-clion
- https://intellij-support.jetbrains.com/hc/en-us/community/posts/206607995-Does-CLion-support-boost-library-

### Boost Test Suit

- https://www.boost.org/doc/libs/1_53_0/libs/test/doc/html/utf/user-guide/test-organization/test-suite.html
- https://stackoverflow.com/questions/17024143/boost-test-does-not-init-unit-test-suite
- 