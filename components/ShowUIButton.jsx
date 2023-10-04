'use client';

import React, { useEffect, useState } from 'react';
import { magic } from '@/lib/magic';

const ShowUIButton = () => {
  const [showButton, setShowButton] = useState(false);

  const checkWalletType = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        const walletInfo = await magic.user.getInfo();
        const isMagicWallet = walletInfo.walletType === 'magic';
        setShowButton(isMagicWallet);
      } else {
        setShowButton(false);
      }
    } catch (error) {
      console.error('checkWalletType:', error);
    }
  };

  // useEffect(() => {
  //   // Call the checkWalletType function immediately
  //   checkWalletType();

  //   // Set an interval to periodically check the login status
  //   const intervalId = setInterval(() => {
  //     checkWalletType();
  //   }, 1000); // Check every 5 seconds

  //   // Cleanup the interval on component unmount
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const handleShowUI = async () => {
    try {
      await magic?.wallet.showUI();
    } catch (error) {
      console.error('handleShowUI:', error);
    }
  };

  return (
    <div>
      {showButton ? (
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2"
          onClick={handleShowUI}
        >
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQG_a0mmkUiPiQ/company-logo_200_200/0/1626905696864?e=2147483647&v=beta&t=zlVis9b-9Cm_TYSOsRnjg_tjfiDKloSUh8CdZD7ZdjI"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
        </button>
      ) : null}
    </div>
  );
};

export default ShowUIButton;
