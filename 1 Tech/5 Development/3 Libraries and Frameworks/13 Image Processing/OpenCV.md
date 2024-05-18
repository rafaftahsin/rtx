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
- https://docs.opencv.org/4.x/db/df5/tutorial_linux_gcc_cmake.html

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
- https://learnopencv.com/getting-started-with-opencv/

### K-Means clustering

- https://docs.opencv.org/3.4/d1/d5c/tutorial_py_kmeans_opencv.html
- https://docs.opencv.org/3.4/d5/d38/group__core__cluster.html#ga9a34dc06c6ec9460e90860f15bcd2f88

### Stiching

- https://docs.opencv.org/4.x/d8/d19/tutorial_stitcher.html
- https://docs.opencv.org/4.x/d1/d46/group__stitching.html
- https://github.com/whdlgp/Stitching-tutorial-with-OpenCV/blob/master/parameter_module_setup/parameter_module_setup.md
- https://pyimagesearch.com/2018/12/17/image-stitching-with-opencv-and-python/

### OpenCV Color Detection

- https://www.geeksforgeeks.org/multiple-color-detection-in-real-time-using-python-opencv/

### How to check opencv version

- https://stackoverflow.com/questions/11030640/how-to-determine-opencv-version

### Hello World OpenCV program

CMakeLists.txt
```
cmake_minimum_required(VERSION 3.27)
project(opencv_hello_world)

set(CMAKE_CXX_STANDARD 17)

find_package(OpenCV REQUIRED)
include_directories(${OpenCV_INCLUDE_DIRS})

add_executable(opencv_hello_world main.cpp)
target_link_libraries(opencv_hello_world ${OpenCV_LIBS})
```

main.cpp
```
#include <iostream>
#include <opencv4/opencv2/opencv.hpp>
#include <opencv4/opencv2/highgui/highgui.hpp>

using namespace cv;

int main() {
    namedWindow("Output", 1);
    Mat output = Mat::zeros(120, 350, CV_8UC3);
    putText(output, "Hello World :)", Point(15, 70), FONT_HERSHEY_PLAIN, 3, Scalar(0,255, 0), 4);
    imshow("Output", output);
    waitKey(0);
    std::printf("Hello World");
    return 0;
}
```

Ref: https://gist.github.com/EyalAr/3940636

# 