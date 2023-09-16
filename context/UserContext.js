import { createContext, useContext, useEffect, useState } from 'react';
import { useMagic } from './MagicContext';

const UserContext = createContext({
  user: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { provider } = useMagic();

  const [user, setUser] = useState(null);

  const fetchUserAccount = async () => {
    if (!provider) return;

    try {
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      setUser(account);
    } catch (error) {
      console.error('Error fetching user account:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUserAccount();
  }, [provider]);

  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
