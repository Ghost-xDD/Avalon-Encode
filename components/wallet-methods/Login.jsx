import React, { useState, useCallback } from 'react';
import ConnectButton from '../button/ConnectButton';
import { useMagicContext } from '@/context/MagicProvider';

const Login = ({ setAccount }) => {
  const [disabled, setDisabled] = useState(false);
  const { magic } = useMagicContext();

  const connect = useCallback(async () => {
    if (!magic) return;
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

  return (
    <div>
      <ConnectButton onClick={connect} disabled={disabled} />
    </div>
  );
};

export default Login;
