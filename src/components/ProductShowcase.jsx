import React from 'react';
import casa_home from '../assets/imgs_product_showcase/casa_home.png';
import Ellipse from '../assets/imgs_product_showcase/Ellipse 9.png';
import cart from '../assets/imgs_product_showcase/cart.png';
import casa_gato from '../assets/imgs_product_showcase/image 25.png';

function ProductShowcase() {
  return (
    <div className="w-full flex ">
      <div className="relative flex flex-col mr-[10px]">
        <div className="absolute top-2 left-0">
          <img src={Ellipse} alt="Ellipse" className="z-10" />
        </div>
        <div className="ms-[20px] mt-[107px] z-20">
          <h2 className="font-bold text-[70px] text-[#373737] leading-[74px] ">QUERI <br/> DINHO  <br/> <span className="font-normal text-[70px] text-[#373737] leading-[74px]">DELES</span></h2>
          <button className="bg-transparent mt-[34px] border border-black text-black w-[182px] h-[45px] rounded-[29px] px-[24px] py-[12px] text-[20px] font-medium leading-[25.2px] hover:bg-white hover:text-black focus:bg-black focus:text-white ">
            VER TUDO
          </button>
        </div>
      </div>
      
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="flex flex-col items-start w-[310px] h-[436px] mt-[84px] ">
          <div className="w-full flex flex-col items-end ms-[35px]">
            <div className="w-[57px] h-[21px] bg-[#4DA1B1] text-white text-[10px] font-bold leading-[12.6px] flex items-center justify-center px-[8px] py-[7px]">10%<span className="font-light">OFF</span></div>
            <div className="w-[93px] h-[21px] bg-[#E5675D] text-white text-[10px] font-normal leading-[12.6px] flex items-center justify-center px-[8px] py-[7px] mt-[5px]">LANÇAMENTO</div>
          </div>
          <div className="flex justify-center items-center w-[100%] mt-[50px] ms-[45px]">
            <img src={casa_home} alt="Produto" className="w-[130px] h-[171px]" />
          </div>
          
          <div className="flex justify-between w-full ms-[40px] mt-[55px]">
            <div className="flex flex-col ms-[13px]">
              <h3 className="font-bold text-[16px] text-[#373737] leading-[20.16px]">TOCA TÚNEL <br /> MÓDULOS</h3>
              <div className="flex mt-[3px]">
                <div className="font-light text-[12px] text-[#373737] leading-[15.12px] mr-[8px]">R$00,00 </div>
                <div className="font-bold text-[12px] text-[#373737] leading-[15.12px]">R$0000,00</div>
              </div>
            </div>
            <div className="flex mt-[2px]">
              <span className="w-[10.6px] h-[10.6px] bg-[#7EABE3] rounded-full mr-[6px]"></span>
              <span className="w-[10.6px] h-[10.6px] bg-[#BF362E] rounded-full mr-[6px]"></span>
              <span className="w-[10.6px] h-[10.6px] bg-[#637C52] rounded-full mr-[6px]"></span>
              <span className="w-[10.6px] h-[10.6px] bg-[#433643] rounded-full mr-[6px]"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductShowcase;
