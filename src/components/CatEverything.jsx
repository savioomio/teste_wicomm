import React from 'react';
import bg_image from '../assets/imgs_cat_everything/bg_image.png';

function CatEverything() {
  return (
    <div className="relative w-[1280px] h-[660px] mt-[72px]">
      {/* Imagem de fundo */}
      <img
        src={bg_image}
        alt="Imagem de fundo"
        className="w-full h-full object-cover"
      />

      {/* Caixa de texto no canto superior direito */}
      <div className="absolute top-5 right-5 w-[282px] h-[322px] bg-white border border-black">
        <h2 className="font-sora font-bold text-[30px] leading-[38px] ms-[31px] mt-[26px]">Lorem Ipsum Dolor Sit</h2>
        <p className="mt-4 font-sora font-light text-[14px] leading-[18px] ms-[32px] w-[232px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <br />
          <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
        <button className="mt-7 ms-[32px] w-[182px] h-[45px] border border-black font-sora font-normal text-[17px] leading-[21.42px] rounded-[29px] p-[12px_24px] focus:bg-black focus:text-white">
          VER SELEÇÃO
        </button>
      </div>
    </div>
  );
}

export default CatEverything;
