import React from 'react';
import Produto1 from '../assets/imgs_category_navigation/produto_1.png';
import Produto2 from '../assets/imgs_category_navigation/produto_2.png';
import Produto3 from '../assets/imgs_category_navigation/produto_3.png';
import Produto4 from '../assets/imgs_category_navigation/produto_4.png';

function CategoryNavigation() {
  return (
    <div className="w-full flex flex-col items-center ">
      <h2 className="font-sora font-bold text-[18px] leading-[22.68px] tracking-[8px] text-gray-900 mb-[28px] mt-4 text-center ms-[8px] ">NAVEGUE PELAS CATEGORIAS</h2>
      <div className="flex space-x-[16px] w-[1240px] h-[60px]">
        <button className="flex items-center justify-center border border-black rounded-[29px] px-[24px] py-[12px] hover:bg-gray-200 w-[255.11px] h-[59px]">
          <img src={Produto1} alt="Clássico" className="mr-[10px]" />
          <span className="text-black font-[400] text-[20px] leading-[25.2px] text-center">CLÁSSICO</span>
        </button>
        <button className="flex items-center justify-center border border-black rounded-[29px] px-[24px] py-[12px] hover:bg-gray-200 w-[255.11px] h-[59px]">
          <img src={Produto2} alt="Minimalismo" className="mr-[10px]" />
          <span className="text-black font-[400] text-[20px] leading-[25.2px] text-center">MINIMALISMO</span>
        </button>
        <button className="flex items-center justify-center border border-black rounded-[29px] px-[24px] py-[12px] hover:bg-gray-200 w-[255.11px] h-[59px]">
          <img src={Produto3} alt="Maximalismo" className="mr-[10px]" />
          <span className="text-black font-[400] text-[20px] leading-[25.2px] text-center">MAXIMALISMO</span>
        </button>
        <button className="flex items-center justify-center border border-black rounded-[29px] px-[24px] py-[12px] hover:bg-gray-200 w-[255.11px] h-[59px]">
          <img src={Produto4} alt="Boho" className="mr-[10px]" />
          <span className="text-black font-[400] text-[20px] leading-[25.2px] text-center">BOHO</span>
        </button>
        <button className="flex items-center justify-center border border-black rounded-[29px] px-[23px] py-[12px] hover:bg-gray-200 w-[154.37px] h-[59px]">
          <span className="text-black font-[400] text-[20px] leading-[25.2px] text-center">VER TUDO</span>
        </button>
      </div>
    </div>
  );
}

export default CategoryNavigation;
