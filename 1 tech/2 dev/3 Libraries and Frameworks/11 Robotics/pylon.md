---
title: pylon
---

### Pylon CPP API Reference

- https://docs.baslerweb.com/pylonapi/cpp/class_pylon_1_1_access_exception

### Image Stitching Example

```
#include <iostream>
#include <pylon/Pixel.h>
#include <pylon/PylonIncludes.h>
#include "StitchImage.h" 
// https://github.com/MattsProjects/StitchImage/blob/master/StitchImage.h

int main(int argc, char * argv[]) {
    Pylon::CPylonImage image1;
    image1.Load("left_1.png");
    std::cout << image1.GetHeight() << std::endl;
    std::cout << image1.GetWidth() << std::endl;

    Pylon::CPylonImage image2;
    image2.Load("right_1.png");
    std::cout << image2.GetHeight() << std::endl;
    std::cout << image2.GetWidth() << std::endl;

    Pylon::CPylonImage horizontalStitchedImage;

    std::string errorMessage = "";

    StitchImage::StitchToRight(horizontalStitchedImage, image1, &horizontalStitchedImage, errorMessage);
    StitchImage::StitchToRight(horizontalStitchedImage, image2, &horizontalStitchedImage, errorMessage);

    const Pylon::String_t image_name = "image_stitching/stitch.png";

    horizontalStitchedImage.Save(Pylon::ImageFileFormat_Png, image_name);

    return 0;
}
```

### pylon Network configuration 

- https://docs.baslerweb.com/network-configuration-%28gige-cameras%29

### pylon recommended NICs

- For 1g GiE 
  - Intel Pro 1000 series
  - Intel i210 series
  - Intel i340 series
  - Intel i350 series
- For 5g GigE
  - Marvell AQtion AQC107

- https://docs.baslerweb.com/hardware-installation-(gige-cameras)#recommended-gige-network-adapters

### ROI 

- https://docs.baslerweb.com/image-roi#c-native
- https://docs.baslerweb.com/dual-roi
- https://docs.baslerweb.com/stacked-roi

### Stacked Zone Imaging

- https://docs.baslerweb.com/stacked-zone-imaging

### OpenCV pylon

- https://github.com/basler/pypylon/blob/master/samples/opencv.py

