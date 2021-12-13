import React from 'react';
import { ProductImage, SwiperSection } from './styles';

export default function ProdImgSwiper(props) {
  return (
    <SwiperSection>
      <ProductImage src={props.product.availableColors[props.colorIndex].images[0]} alt={props.product.title} />
    </SwiperSection>
  );
};
