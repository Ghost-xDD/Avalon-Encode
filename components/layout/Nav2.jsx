import { useState, useCallback, useEffect } from 'react';
import { SiBlockchaindotcom } from 'react-icons/si';
import Link from 'next/link';
import { useWalletLogin } from '@lens-protocol/react-web';
import ChooseCreate from '../modal/ChooseCreate';
import { useStickyNavbar } from '@/context/StickyNavbarContext';
import ConnectButton from '../button/ConnectButton';
import { useMagicContext } from '@/context/MagicProvider';
import DisconnectButton from '../button/DisconnectButton';
import SignInLensModal from '../modal/SignInLensModal';
import { ethers } from 'ethers';
import ShowUIButton from '../ShowUIButton';
import dynamic from 'next/dynamic';

const Nav2 = ({ sticky }) => {
  const [openModal, setOpenModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [account, setAccount] = useState(null);
  const [showLensModal, setShowLensModal] = useState(false);
  const { magic } = useMagicContext();
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();

  const connect = useCallback(async () => {
    if (!magic) {
      console.log('Magic does not exist.');
      return;
    }

    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Connected wallet:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
      console.log('User logged in with address:', accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  const loginLens = useCallback(
    async (account) => {
      try {
        const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
        const signer = provider.getSigner();
        console.log(signer);

        await login(signer, account);
        console.log('User logged in with account:', account);
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    [login]
  );

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    setAccount(user);
  }, []);

  useEffect(() => {
    if (account) {
      setShowLensModal(true);
    }
  }, [account]);

  // console.log(account);

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
            {/* <ShowUIButton /> */}
            <div className="absolute right-12">
              {account ? (
                <DisconnectButton />
              ) : (
                <ConnectButton onClick={connect} disabled={disabled} />
              )}
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link href="/profile">
              <span className="text-end ml-[80px] p-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            </Link>
          </div>
        </div>
      </section>
      <ChooseCreate
        openMintModal={openModal}
        handleOnClose={() => setOpenModal(false)}
      />
      <SignInLensModal
        openLensModal={showLensModal}
        handleOnClose={() => setShowLensModal(false)}
        lensLogin={loginLens}
      />
    </nav>
  );
};

export default Nav2;
