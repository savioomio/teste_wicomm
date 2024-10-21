import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

import baner_gato1 from '../assets/imgs_carousel/baner_gato1.png';
import baner_gato2 from '../assets/imgs_carousel/baner_gato2.png';
import baner_home from '../assets/imgs_carousel/baner_home.png';
import ArrowLeft from '../assets/imgs_carousel/navegacao/ArrowLeft.svg';
import ArrowRight from '../assets/imgs_carousel/navegacao/ArrowRight.svg';

const Carousel = () => {
  return (
    <div className=" flex justify-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        slidesPerView={1.1} 
        spaceBetween={30} 
        className="max-w-[1280px]"
        // loop={true} 
        speed={500}
        initialSlide={1} // Definindo para iniciar com o segundo slide
      >
        <SwiperSlide>
          <div className="w-[1179px] h-[559px] mx-[50px]">
            <img
              src={baner_gato2}
              alt="Imagem 1 do Carrossel"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[1179px] h-[559px] mx-[50px]">
            <img
              src={baner_home}
              alt="Imagem 2 do Carrossel"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[1179px] h-[559px] mx-[50px]">
            <img
              src={baner_gato1}
              alt="Imagem 3 do Carrossel"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Botões de navegação personalizados com SVGs */}
        <img src={ArrowLeft} alt="Previous" className="swiper-button-prev p-30 rounded-full w-[60px] mt-[13px] ms-[114px]" />
        <img src={ArrowRight} alt="Next" className="swiper-button-next p-30 rounded-full w-[60px] mt-[13px] mr-[114px]" />

        {/* Paginação personalizada */}
        <div className="swiper-pagination text-black flex gap-[12px] mb-[21px] ms-[120px]"></div>
      </Swiper>


    </div>
  );
};

export default Carousel;
