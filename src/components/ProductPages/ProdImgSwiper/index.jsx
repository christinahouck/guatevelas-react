import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import { ProductImage } from './styles';

SwiperCore.use([Navigation]);

const styles = {
    width: '100%',
}

export default function ProdImgSwiper(props) {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
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
    );
};
