---
title: OpenCV
---




### How to configure OpenCV C++ dev environment in Ubuntu 22.04

```shell
sudo apt install -y g++ cmake make git libgtk2.0-dev pkg-config
git clone https://github.com/opencv/opencv.git
mkdir -p build && cd build
cmake ../opencv
make -j4
sudo make install
```


- https://www.geeksforgeeks.org/how-to-install-opencv-in-c-on-linux/
- https://docs.opencv.org/4.x/d7/d9f/tutorial_linux_install.html

### Different types of stitching in OpenCV

- https://medium.com/@paulsonpremsingh7/image-stitching-using-opencv-a-step-by-step-tutorial-9214aa4255ec

### How to install opencv python

```shell
pip install opencv-python
```

Ref: https://pypi.org/project/opencv-python/#installation-and-usage

### python opencv tutorial 

- Geekforgeeks
  - https://www.geeksforgeeks.org/opencv-python-tutorial/
  - https://www.geeksforgeeks.org/python-opencv-roberts-edge-detection/?ref=ml_lbp
- OpenCVhelp
  - https://www.opencvhelp.org/
- Youtube
  - https://www.youtube.com/watch?v=2FYm3GOonhk


