import React, { useState } from "react";
import { Image, ProductGallery, SelectView } from "./Styles/Index";

import image1 from "../../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../../assets/images/image-product-2-thumbnail.jpg";
import image3 from "../../assets/images/image-product-3-thumbnail.jpg";
import image4 from "../../assets/images/image-product-4-thumbnail.jpg";

import largeImage1 from "../../assets/images/image-product-1.jpg";
import largeImage2 from "../../assets/images/image-product-2.jpg";
import largeImage3 from "../../assets/images/image-product-3.jpg";
import largeImage4 from "../../assets/images/image-product-4.jpg";

const ProductView = () => {
  const [selectedView, setSelectedView] = useState(0);
  const images = [image1, image2, image3, image4];
  const largeImages = [largeImage1, largeImage2, largeImage3, largeImage4];

  return (
    <ProductGallery>
      <Image src={largeImages[selectedView]} />

      <SelectView>
        {images.map((img, i) => (
          <Image
            src={img}
            key={i}
            h={6}
            onClick={() => setSelectedView(i)}
            isSelected={selectedView === i}
          />
        ))}
      </SelectView>
    </ProductGallery>
  );
};

export default ProductView;
