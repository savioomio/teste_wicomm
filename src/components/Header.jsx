import React from 'react';
import logo from '../assets/imgs_header/logo.png';
import produtosIcon from '../assets/imgs_header/menu_01.png';
import colecoesIcon from '../assets/imgs_header/menu_02.png';
import userIcon from '../assets/imgs_header/user.png';
import cartIcon from '../assets/imgs_header/cart.png';
import searchIcon from '../assets/imgs_header/search.svg';
import notificationIcon from '../assets/imgs_header/notification.svg';

const Header = () => {
    return (
      <div className="mx-auto flex justify-between items-center">
        <div className="bg-gray-100 w-[139px] h-[40px]">
          <img src={logo} alt="gat logo" className="w-[85px] h-[40px] flex mx-[auto] mt-[5px]" />
        </div>
        <nav className="flex w-[100%] justify-between items-center" role="navigation" aria-label="Main Navigation">
          <div className="flex">
            <a href="#produtos">
              <div className="w-[135px] h-[40px] text-sm flex items-center justify-center border-r-white border-r-[1px]">
                <img src={produtosIcon} alt="produtos icon" className="w-[16px] h-[16px] mr-[10px]" />
                <p className="font-bold text-[14px] leading-[17.64px]">produtos</p>
              </div>
            </a>
            <a href="#colecoes">
              <div className="w-[130px] h-[40px] text-sm flex items-center justify-center border-r-white border-r-[1px]">
                <img src={colecoesIcon} alt="coleções icon" className="w-[16px] h-[16px] mr-[10px]" />
                <p className="font-light text-[14px] leading-[17.64px]">coleções</p>
              </div>
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex font-light ">
              <a href="#blog" className=" font-light text-[14px] leading-[17.64px] px-[0.70rem]">blog</a>
              <a href="#lookbook" className=" font-light text-[14px] leading-[17.64px] px-[0.70rem]">lookbook</a>
              <a href="#sobre" className=" font-light text-[14px] leading-[17.64px] px-[0.70rem]">sobre a Gat</a>
              <a href="#wishlist" className=" font-light text-[14px] leading-[17.64px] px-[0.70rem]">wishlist</a>
            </div>

            <div className="relative w-[213px] h-[40px] border-x-white border-x-[1px]">
              <img src={searchIcon} alt="search icon" className="absolute top-1/2 left-3 transform -translate-y-1/2 w-[17px] h-[16px] " />
              <input
                type="text"
                placeholder="digite aqui o que procura"
                aria-label="Search"
                className="my-3 ms-9 font-light text-[12px] leading-[15.12px]  bg-[#1E1E1E] rounded focus:outline-none focus:bg-[#1E1E1E] focus:"
              />
            </div>

            <button className="flex items-center justify-center w-[38px] h-[40px]" aria-label="User">
              <img src={userIcon} alt="user icon" className="w-[19px] h-[18px]" />
            </button>

            <div className="relative w-[58px] h-[40px] border-s-white border-s-[1px] flex items-center justify-center">
              <button className="flex items-center justify-center" aria-label="Cart">
                <img src={cartIcon} alt="cart icon" className="w-[17px] h-[16px]" />
              </button>
              <img src={notificationIcon} alt="notification icon" className="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2" />
            </div>

          </div>
        </nav>
      </div>
    );
};

export default Header;
