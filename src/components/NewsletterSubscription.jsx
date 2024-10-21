import React from 'react';
import imagem from '../assets/imgs_newsletter_subscription/image.png';

function CatSpotlight() {
  return (
    <div className="flex w-full justify-between mt-[40px]">
        <div className="flex flex-col w-[40%] ms-[20px]">
            <img src={imagem} alt="Cat Video" className="w-[505px] h-[347px] " />
        </div>
        <div className="flex flex-col w-[60%] mt-[55px]">
            <div className="flex ms-[17px] ">
                <h2 className="text-[50px] font-normal text-[#373737] leading-[63px]">NEWSLETTER</h2>
            </div>
            <div className="flex ms-[20px]">
                <div className="flex flex-col w-[40%] mt-[40px]">
                    <p className="text-[14px] font-bold text-[#373737] leading-[25px] w-[274px]">CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</p>
                    <p className="text-[14px] font-normal text-[#373737] mb-8 leading-[25px]">Seja a primeira a receber lançamentos, novidades e promoções.</p>
                </div>
                <div className="flex flex-col w-[60%]">
                    <form className="flex flex-col ms-[15px] mt-[28px]">
                        <div className="relative border-b border-[#373737] w-[400px]">
                            <input type="text" placeholder=" " className="w-full bg-transparent p-2 text-[#373737] focus:outline-none focus:ring-0 peer text-[14px] font-normal leading-[25px] font-sora" />
                            <label className="absolute top-0 left-0 text-[#373737] py-2 px-0 pointer-events-none transition-transform transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-[14px] font-normal leading-[25px] font-sora">NOME DO SEU PET</label>
                        </div>
                        <div className="relative border-b border-[#373737] mt-[20px] w-[400px]">
                            <input type="email" placeholder=" " className="w-full bg-transparent p-2 text-[#373737] focus:outline-none focus:ring-0 peer text-[14px] font-normal leading-[25px] font-sora" />
                            <label className="absolute top-0 left-0 text-[#373737] py-2 px-0 pointer-events-none transition-transform transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-[14px] font-normal leading-[25px] font-sora">SEU EMAIL</label>
                        </div>
                        <button className="mt-[36px] flex justify-center items-center border py-[12px] px-[24px] text-[#373737] font-normal text-[20px] leading-[25.2px] rounded-[29px] w-[188px] border-[#000000] h-[39px] hover:bg-white hover:text-black focus:bg-black focus:text-white">
                            CADASTRAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CatSpotlight;
