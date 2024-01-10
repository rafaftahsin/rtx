---
title: ImageMagick
---

### Good Startup Tutorial

- https://www.youtube.com/watch?v=wjcBOoReYc0
- https://web.mit.edu/GRAPHICs/src/ImageMagick-6.0.6/www/Magick++/Documentation.html
- https://opensource.com/article/17/8/imagemagick

### How to install on ubuntu

```shell
sudo apt install imagemagick
```

### convert jpg to png

```shell
ls -1 *.jpg | xargs -n 1 bash -c 'convert "$0" "${0%.jpg}.png"'
```

Ref: https://linuxways.net/ubuntu/convert-png-to-jpeg-jpeg-to-png-using-the-command-line-in-ubuntu/
