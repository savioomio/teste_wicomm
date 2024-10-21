import React from 'react';
import Elipse_red from '../assets/imgs_cat_spotlight/elipse_red.png';
import Video from '../assets/imgs_cat_spotlight/video.png';

function CatSpotlight() {
  return (
    <div className="flex w-full justify-between mt-[42px]">
      <div className="relative w-[50%]">
        <img src={Elipse_red} alt="Red Ellipse" className="absolute top-[0px] left-[295px] w-[272px] h-[272px] z-[20]" />
        <h1 className="absolute top-[65px] left-[129px] font-normal text-[70px] leading-[88.2px] text-[#373737] z-[30]">
          Decorar<br />
          Arranhar &<br />
          Relaxar
        </h1>
      </div>

      <div className="flex flex-col w-[50%] mt-[29px]">
        <img src={Video} alt="Cat Video" className="w-[505px] h-[284.06px] ms-[10px]" />
        <p className="font-normal text-[14px] leading-[25px] text-[#373737] mt-[48px] ms-[10px] w-[505px]">
          Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.
        </p>
        <button className="border border-[#000000] py-[12px] px-[24px] text-[#373737] font-normal text-[20px] leading-[25.2px] rounded-[29px] w-[295px] h-[45px] ms-[10px] mt-[38px] mb-[46px] hover:bg-white hover:text-black focus:bg-black focus:text-white">
          MAIS SOBRE A GAT
        </button>
      </div>
    </div>
  );
}

export default CatSpotlight;
