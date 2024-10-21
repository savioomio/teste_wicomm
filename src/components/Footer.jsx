import React from 'react';
import certificado from '../assets/imgs_footer/certificado.png';
import logo from '../assets/imgs_footer/logo.png';
import redes_sociais from '../assets/imgs_footer/redes_sociais.png';
import formas_pagamentos from '../assets/imgs_footer/formas_pagamentos.png';

function Footer() {
  return (
    <div className="w-full mt-[50px] h-[234px]">
      <div className="flex w-full max-w-[1240px]  mx-auto border-[1px] border-[#373737]">
        {/* Logo Section */}
        <div className="flex justify-center items-center w-[210px] h-[189px] bg-[#373737]">
          <img src={logo} alt="Logo da empresa" className="w-[75px] h-[101.12px]" />
        </div>

        {/* Menu Section */}
        <div className="flex flex-col w-[525px]">
            <ul className="flex justify-around items-center border-b-[1px] border-b-[#373737] h-[45px]">
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">PRODUTOS</a></li>
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">COLEÇÕES</a></li>
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">LOOKBOOK</a></li>
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">Sobre</a></li>
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">WISHLIST</a></li>
                <li><a href="#" className="font-bold text-[12px] leading-[25px] text-gray-600 hover:text-gray-900">BLOG</a></li>
            </ul>
            {/* Payment Methods and Certificates Section */}
            <div className="flex h-[122px]">
                <div className="border-r-[1px] border-r-[#373737] w-[210px] h-[100%]">
                    <h4 className="font-bold text-[12px] leading-[25px] ms-[15px] mt-[13px] ">FORMAS DE PAGAMENTO</h4>
                    <img src={formas_pagamentos} alt="Formas de pagamento" className="w-[159.43px] h-[51.91px] filter grayscale ms-[15px] mt-[12px] " />
                </div>

                <div className="w-[315px] h-[100%]">
                    <h4 className="font-bold text-[12px] leading-[25px] text-gray-700 mt-[13px] ms-[15px]">CERTIFICADOS E SEGURANÇA</h4>
                    <div className="flex w-full">
                        <img src={certificado} alt="Certificado" className="h-[98px] w-[290px] px-[6px] filter grayscale" />
                    </div>
                </div>
            </div>
        </div>

        {/* Help Section */}
        <div className="border-x-[1px] border-x-[#373737] w-[210px] ">
          <h4 className="font-bold text-[12px] leading-[25px] text-gray-700 mb-2 ms-[18px] mt-[10px]">AJUDA</h4>
          <ul className="text-gray-600 ms-[18px] -mt-[10px]">
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">Sobre nossos produtos</a></li>
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">Trocas e devoluções</a></li>
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">Entregas</a></li>
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">Indique e ganhe</a></li>
            <li><a href="#" className="font-normal text-[12px] leading-[25px] hover:text-gray-900">Garantias</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-[295px]">
          <div className="w-full flex-col h-[88px]">
              <h4 className="font-bold text-[12px] leading-[25px] text-gray-700 ms-[10px] mt-[10px]">CONTATO</h4>
              <p className="font-normal text-[12px] leading-[25px] text-gray-600  ms-[10px]">WhatsApp - (51) 9999-9999</p>
              <p className="font-normal text-[12px] leading-[25px] text-gray-600  ms-[10px]">E-mail - ajuda@gat.com.br</p>
          </div>
          
          <div className="border-t-[1px] border-t-[#373737] w-full flex-col h-[90px] ">
              <h4 className="font-bold text-[12px] leading-[25px] text-gray-700  ms-[10px] mt-[15px]">REDES SOCIAIS</h4>
              <img src={redes_sociais} alt="Ícones das redes sociais" className="w-[137.75px] h-[19px] mt-[10px] ms-[10px] filter grayscale" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-between items-center w-[1240px] mx-auto my-[8px]">
        <p className="font-light text-[4px] leading-[25px]">© 2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
        <p className="font-light text-[3px] leading-[25px]">GAT LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Feliciana | Cataguases - MG | CEP: 36774-550</p>
      </div>
    </div>
  );
}

export default Footer;
