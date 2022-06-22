import React from "react";
import { ProductImage, SwiperSection } from "./styles";

export default function ProdImgSwiper(props) {
  const imgUrlId = props.product.prodId.toString().slice(1);
  return (
    <SwiperSection>
      <ProductImage
        src={`https://ik.imagekit.io/christinacodes/guatevelas/${props.colorIndex}/tr:w-800/GV${imgUrlId}.jpg`}
        alt={props.product.title}
      />
    </SwiperSection>
  );
}
