import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import Img1 from './img/male/508759/blue/la-foresta_10069578.png';
import Img2 from './img/male/508759/blue/la-foresta_10089496.png';
import Img3 from './img/male/508759/blue/la-foresta_10091467.png';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides2 = [];
  for (let i = 9; i < 14; i += 1) {
    slides2.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper id="controller" onSwiper={setControlledSwiper}>
        {/* {slides2} */}

        <SwiperSlide key='1' tag="li">
        <img
          src={Img1}
          style={{ listStyle: 'none' }}
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li">
        <img
          src={Img2}
          style={{ listStyle: 'none' }}
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li">
        <img
          src={Img3}
          style={{ listStyle: 'none' }}
        />
      </SwiperSlide>

      </Swiper>
    </React.Fragment>
  );
}

export default App;