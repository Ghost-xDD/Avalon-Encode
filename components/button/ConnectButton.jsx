import React, { useEffect, useState } from 'react';
import { magic } from '@/lib/magic';
import { useMagic } from '@/context/MagicContext';

const ConnectButton = () => {
  const { initializeProvider } = useMagic();

  const handleConnect = async () => {
    try {
      await magic.wallet.connectWithUI();

      initializeProvider();
    } catch (error) {
      console.error('handleConnect:', error);
    }
  };

  return (
    <button
      type="button"
      className="flex mr-[calc(24px+16px)] sm:mr-0 justify-center space-x-2 items-center bg-black text-white border-primer rounded-lg px-[1.5rem] text-base font-bold h-10 sm:h-12 min-w-[105px] sm:min-w-[140px] transition-all cursor-pointer"
      onClick={handleConnect}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
