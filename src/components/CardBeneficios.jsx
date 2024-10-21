import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';

// Importando os ícones enviados
import Paw from '../assets/imgs_card_beneficios/paw.png';
import PawR from '../assets/imgs_card_beneficios/pawr.png';
import Prize from '../assets/imgs_card_beneficios/prize.png';

function CardBeneficios() {
  return (
    <div className="w-[1180px] h-[238px] bg-[#DE5A53] text-white mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center w-[1030px] h-[180px] border border-white">

        {/* Benefício Principal */}
        <div className="w-[350px] h-[180px] flex items-center justify-center">
          <div className="font-oswald text-[140px] font-[200] leading-[207.48px] mb-[12px] ms-[12px]">10</div>
          <div className="flex-col justify-center items-center ms-[14px] mb-[6px]">
            <div className="text-[30px] font-[600] leading-[37.8px]">Benefício Principal</div>
            <p className="text-[14px] font-[100] leading-[17.64px] mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            {/* Benefícios Secundários */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-[239.33px] h-[129px] border-s-[1px] border-white flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[196px] h-[129px]">
                  <div className="flex items-center justify-center">
                    <img src={Prize} alt="Prize" className="w-[46.87px] h-[47.01px]" />
                    <div className="text-[22px] font-[600] leading-[27.72px] text-right mt-[7px] ms-[1px]">Benefício Secundário</div>
                  </div>        
                  <p className="text-[14px] font-[100] leading-[17.64px] mt-2">Lorem ipsum dolor sit amet, consectetur al muad'ib.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carrossel loop infinito */}
          <div className="w-[718px] h-[52px] border-t-[1px] border-s-[1px] border-white flex items-center justify-center">
            <Swiper
              spaceBetween={10}
              slidesPerView={4} 
              loop={true}
              centeredSlides={true}
              speed={1000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="flex items-center"
            >
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={Paw} alt="Ícone Paw" className="w-5 h-5 mr-2" />
                <span className="text-sm">Benefício Terciário</span>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={PawR} alt="Ícone PawR" className="w-5 h-5 mr-2" />
                <span className="text-sm">Lisan Al Gaib</span>
              </SwiperSlide>
              {/* Repita os elementos para garantir que a animação seja contínua */}
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={Paw} alt="Ícone Paw" className="w-5 h-5 mr-2" />
                <span className="text-sm">Benefício Terciário</span>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={PawR} alt="Ícone PawR" className="w-5 h-5 mr-2" />
                <span className="text-sm">Benefício Terciário</span>
              </SwiperSlide>
              {/* Repita os elementos para garantir que a animação seja contínua */}
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={Paw} alt="Ícone Paw" className="w-5 h-5 mr-2" />
                <span className="text-sm">Lisan Al Gaib</span>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-white w-auto">
                <img src={PawR} alt="Ícone PawR" className="w-5 h-5 mr-2" />
                <span className="text-sm">Benefício Terciário</span>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CardBeneficios;
