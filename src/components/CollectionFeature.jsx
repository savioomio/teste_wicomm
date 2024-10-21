import React from 'react';
import image1 from '../assets/imgs_collection_feature/image 5.png';
import image2 from '../assets/imgs_collection_feature/Rectangle 33.png';
import image3 from '../assets/imgs_collection_feature/Rectangle 34.png';
import image4 from '../assets/imgs_collection_feature/image 25.png';
import image5 from '../assets/imgs_collection_feature/Ellipse 10.png';
import ArrowLeft from '../assets/imgs_collection_feature/ArrowLeft.svg';
import ArrowRight from '../assets/imgs_collection_feature/ArrowRight.svg';

const CollectionFeature = () => {
    return (
        <div className="collection-feature flex flex-col items-center justify-center w-full">
          <div className="w-full flex">
            <div className="w-[483px] h-[210px] bg-[#4DA1B1] flex items-center justify-end ms-[126px] mt-[80px] z-20">
              <h2 className="text-[#EFEFEF] text-[50px] font-bold leading-[57px] text-left mr-[60px]">
                MINIMA
                <br />
                LISMO
              </h2>
            </div>
            <div className="flex items-start justify-start w-[50%]">
              <div className="flex w-[58%] ">
                <h3 className="text-[#000000] font-bold text-[20px] leading-[57px] mt-[60px] ms-[45px]">COLEÇÕES</h3>
                <a href="#" className="text-[#000000] font-light text-[14px] leading-[57px] text-center underline mt-[63px] ms-[125px]">VER TODAS</a>
              </div>
              <div className="flex mt-[78px] w-[42%] justify-end ">
                <img src={ArrowLeft} alt="Arrow Left" className="w-[59px] border-t-[2px] mr-[12px]" />
                <img src={ArrowRight} alt="Arrow Right" className="w-[59px] border-t-[2px] ms-[12px]" />
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <img src={image1} alt="image1" className="relative -mt-[133px] h-[469px] z-30" />          
            <div className="flex items-center justify-center z-10 -mt-[233px] -ms-[63px]">
                <div className="relative">
                    <img src={image2} alt="image2" className="w-auto h-auto z-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-[100%]">
                        <div className="flex-col w-[64%] h-auto mt-[5px]">
                            <p className="text-[#000000]  text-[20px] leading-[30px] mr-[30px] ">Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.</p>

                            <button className="w-[182px] h-[45px] mt-[35px] border-[1px] border-black rounded-[29px] text-[#000000] text-[20px] font-normal leading-[25.2px] flex items-center justify-center hover:bg-white hover:text-black focus:bg-black focus:text-white transition">EXPLORAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center relative z-50 -mt-[245px] -ms-[95px]">
              <img src={image3} alt="image3" className="transform translate-y-[33%] z-20" />
              <div className="relative flex items-center justify-center -mt-[75px] z-30">
                <img src={image4} alt="image4" className="w-auto h-auto" />
                <div className="absolute inset-0 flex items-center justify-center -mt-[80px] -ms-[220px]">     
                  <img src={image5} alt="image5" className="w-auto h-auto" />
                  <span className="absolute text-black text-[30px] font-normal">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default CollectionFeature;
