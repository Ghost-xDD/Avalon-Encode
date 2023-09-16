import React from 'react';
import { magic } from '@/lib/magic';
import { useMagic } from '@/context/MagicContext';

const DisconnectButton = () => {
  const { initializeProvider } = useMagic();

  const handleDisconnect = async () => {
    try {
      await magic.user.logout();

      initializeProvider();
    } catch (error) {
      console.error('handleDisconnect:', error);
    }
  };

  return (
    <button
      type="button"
      className="flex mr-[calc(24px+16px)] sm:mr-0 justify-center space-x-2 items-center bg-black text-white border-primer rounded-lg px-[1.5rem] text-base font-bold h-10 sm:h-12 min-w-[105px] sm:min-w-[140px] transition-all cursor-pointer"
      onClick={handleDisconnect}
    >
      0x34f6...f3f
    </button>
  );
};

export default DisconnectButton;
