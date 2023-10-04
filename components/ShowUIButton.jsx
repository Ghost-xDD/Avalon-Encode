'use client';

import React, { useEffect, useState } from 'react';
import { magic } from '@/lib/magic';
import { FadeLoader } from 'react-spinners';

const ShowUIButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { magic } = useMagicContext();

  const checkWalletType = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // const walletInfo = await magic.wallet.getInfo();
        // const isMagicWallet = walletInfo.walletType === 'magic';
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    } catch (error) {
      console.error('checkWalletType:', error);
    }
  };

  useEffect(() => {
    checkWalletType();

    const intervalId = setInterval(() => {
      checkWalletType();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleShowUI = async () => {
    try {
      setLoading(true);
      console.log('stat');
      await magic?.wallet.showUI();
    } catch (error) {
      console.error('handleShowUI:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {showButton ? (
        <button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-full p-2 transform transition-transform duration-150 active:scale-95 flex items-center justify-center" // Added flex utilities
          onClick={handleShowUI}
          disabled={loading}
        >
          {loading ? (
            <FadeLoader color="#fff" size={150} />
          ) : (
            <img
              src="https://media.licdn.com/dms/image/C4D0BAQG_a0mmkUiPiQ/company-logo_200_200/0/1626905696864?e=2147483647&v=beta&t=zlVis9b-9Cm_TYSOsRnjg_tjfiDKloSUh8CdZD7ZdjI"
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
          )}
        </button>
      ) : null}
    </div>
  );
};

export default ShowUIButton;
