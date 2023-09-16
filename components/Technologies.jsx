import React from 'react';

const Technologies = () => {
  return (
    <div className="text-center flex justify-center py-8 text-lg">
      <ul className="flex gap-3 text-gray-400">
        <li>Powered By:</li>
        <li className="flex items-center">
          <img
            src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ewu4e1aa8agfntz9hruj"
            alt=""
            className="w-[27px] h-[27px] rounded-full"
          />
          &nbsp;
          <p className="text-md">Lens Protocol</p>
        </li>
        <li className="flex items-center">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQG_a0mmkUiPiQ/company-logo_200_200/0/1626905696864?e=2147483647&v=beta&t=zlVis9b-9Cm_TYSOsRnjg_tjfiDKloSUh8CdZD7ZdjI"
            alt=""
            className="w-[27px] h-[27px] rounded-full"
          />
          &nbsp;
          <p className="text-md">Magic</p>
        </li>
        <li className="flex items-center">
          <img
            src="https://cryptologos.cc/logos/biconomy-bico-logo.png"
            alt=""
            className="w-[27px] h-[27px] rounded-full"
          />
          &nbsp;
          <p className="text-md">Biconomy</p>
        </li>
        {/* <li className="flex items-center">
          <img src="zora.png" alt="" className="w-[27px]" />
          &nbsp;
          <p>Zora</p>
        </li>
        <li className="flex items-center">
          <img src="covalent.jpg" alt="" className="w-[27px]" />
          &nbsp;
          <p>Covalent</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Technologies;
