import { useState, useCallback } from 'react';
import { SiBlockchaindotcom } from 'react-icons/si';
import Link from 'next/link';
import ChooseCreate from '../modal/ChooseCreate';
import { useStickyNavbar } from '@/context/StickyNavbarContext';
import ConnectButton from '../button/ConnectButton';
import { useMagicContext } from '@/context/MagicProvider';
import DisconnectButton from '../button/DisconnectButton';
import Login from '../wallet-methods/Login';
import ShowUIButton from '../ShowUIButton';
import dynamic from 'next/dynamic';

const Nav2 = ({ sticky, setAccount }) => {
  const [openModal, setOpenModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { magic } = useMagicContext();

  const connect = useCallback(async () => {
    if (!magic) {
      console.log('Magic does not exist.');
      return;
    }

    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Logged in user:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <nav
      className={
        sticky
          ? 'stick transition-all backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 bg-transparent z-50'
          : ''
      }
    >
      <section className="container max-w-[78rem] mx-auto px-6 sticky">
        <div className="relative flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full">
            <Link
              className="flex items-center justify-center max-w-[121px] sm:max-w-[161px] px-1 sm:px-[5.33px] transition-all"
              href="/"
            >
              <div className="text-white text-[20px]">
                <SiBlockchaindotcom />
              </div>
              &nbsp;
              <p className="text-white text-[25px] font-bold">Avalon</p>
            </Link>
            <div className="hidden sm:flex items-center w-full justify-center transition-all">
              <div className="flex sm:space-x-4 md:space-x-10 justify-center text-white transition-all">
                <Link href="/">
                  <button type="button" className="text-[14px] font-bold">
                    Home
                  </button>
                </Link>
                <Link href="/explore">
                  <button type="button" className="text-[14px] font-bold">
                    Explore
                  </button>
                </Link>
                <button
                  type="button"
                  className="text-[14px] font-bold"
                  onClick={handleOpenModal}
                >
                  Create
                </button>
                <Link href="/marketplace">
                  <button type="button" className="text-[14px] font-bold">
                    Marketplace
                  </button>
                </Link>
                <button type="button" className="text-[14px] font-bold">
                  Leaderboard
                </button>
                <button type="button" className="text-[14px] font-bold">
                  Community
                </button>
              </div>
            </div>
            <div className="absolute right-12">
              <ConnectButton onClick={connect} disabled={disabled} />
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link href="/profile">
              <span className="text-end ml-[80px] p-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            </Link>
          </div>

          {/* <div className="absolute inset-y-0 right-0 flex items-center transition-all sm:hidden">
            <button
              className="min-[412px]:text-white min-[412px]:bg-[#101010]/[.3]  min-[412px]:backdrop-blur-lg text-white rounded-sm w-6 h-6 inline-flex items-center justify-center rounded-mdx hover:bg-none focus:outline-none focus:ring-none focus:ring-none transition-all"
              id="headlessui-disclosure-button-:R15id6:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
                <rect
                  x="2"
                  y="11"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
                <rect
                  x="2"
                  y="18"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div> */}
        </div>
      </section>
      <ChooseCreate
        openMintModal={openModal}
        handleOnClose={() => setOpenModal(false)}
      />
    </nav>
  );
};

export default Nav2;
