import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

// Importando os ícones enviados
import gato1 from '../assets/imgs_gallery/gato1.png';
import gato2 from '../assets/imgs_gallery/gato2.png';
import gato3 from '../assets/imgs_gallery/gato3.png';
import gato4 from '../assets/imgs_gallery/gato4.png';
import gato5 from '../assets/imgs_gallery/gato5.jpg';
import heartIcon from '../assets/imgs_gallery/heart.svg';
import heartIconRed from '../assets/imgs_gallery/heart_red.svg';

function CardBeneficios() {
    const [liked, setLiked] = useState(Array(10).fill(false));

    const handleHeartClick = (index) => {
        setLiked((prev) => {
            const newLiked = [...prev];
            newLiked[index] = !newLiked[index];
            return newLiked;
        });
    };

    return (
        <div className="w-full h-[725px] bg-white relative">
        <div className="relative ">
            <div className="flex ">
                <p className="text-[20px] font-normal text-[#373737] leading-[25px] mt-[65px] ms-[236px] w-[500px]">
                    Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:
                </p>
            </div>
            <h1 className="text-[75px] font-normal text-[#7EB4C8] leading-[94.5px] absolute top-[104px] left-[229px] z-10">#AdoradoresDePapelão</h1>
        </div>

        <Swiper
            spaceBetween={10}
            slidesPerView={4.5}
            loop={true}
            centeredSlides={true}
            speed={2000}
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="flex items-center mt-[47px]"
        >
            {[gato1, gato2, gato3, gato4, gato5, gato1, gato2, gato3, gato4, gato5].map((gato, index) => (
            <SwiperSlide key={index} className="relative flex items-center justify-center">
                <img src={gato} alt={`gato${index + 1}`} className="w-[270px] h-[481px]" />
                <div className="absolute bottom-[2px] right-[10px] flex justify-center items-center flex-col cursor-pointer" onClick={() => handleHeartClick(index)}>
                    <img
                        src={liked[index] ? heartIconRed : heartIcon}
                        alt="heart icon"
                        className={`w-[24px] h-[24px] transition-transform duration-300 ${liked[index] ? 'scale-125' : 'scale-100'}`}
                    />
                    <p className="text-[13px] font-normal leading-[25px] text-white">10mil</p>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}

export default CardBeneficios;
