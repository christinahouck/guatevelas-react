import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import { ProductImage, ThumbImage, SwiperSection } from './styles';

SwiperCore.use([Navigation]);
SwiperCore.use([Thumbs]);

const styles = {
    width: '100%',
}
const thumbStyles = {
  width: '100px',
  marginRight: '10px',
  maxHeight: '500px',
  overflowY: 'scroll',
}

export default function ProdImgSwiper(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SwiperSection>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        direction={'vertical'}
        style={thumbStyles}
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
      >
          {props.product.prodImages.map((imageUrl, index) => {
              return (
                <SwiperSlide key={`thumbSwiper${index}`}>
                    <ThumbImage src={imageUrl} alt={`${props.product.title} thumbnail`} />
                </SwiperSlide>
              )
          })}
      </Swiper>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        direction={'horizontal'}
        navigation
        style={styles}
      >
          {props.product.prodImages.map((imageUrl, index) => {
              return (
                <SwiperSlide key={`mainSwiper${index}`}>
                    <ProductImage src={imageUrl} alt={props.product.title} />
                </SwiperSlide>
              )
          })}
      </Swiper>
    </SwiperSection>
  );
};
