import React from 'react';
import Loading from 'public/loading.svg';
import Image from 'next/image';

const ConnectButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className="flex mr-[calc(24px+16px)] sm:mr-0 justify-center space-x-2 items-center bg-black text-white border-primer rounded-lg px-[1.5rem] text-base font-bold h-10 sm:h-12 min-w-[105px] sm:min-w-[140px] transition-all cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? (
        <div className="loading-container min-w-full">
          <Image className="loading" alt="loading" src={Loading} />
        </div>
      ) : (
        'Connect'
      )}
    </button>
  );
};

export default ConnectButton;
