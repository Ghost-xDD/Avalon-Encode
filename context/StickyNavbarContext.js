import React, { createContext, useContext, useState, useEffect } from 'react';

const StickyNavbarContext = createContext();

export const useStickyNavbar = () => {
  return useContext(StickyNavbarContext);
};

export const StickyNavbarProvider = ({ children }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const value = {
    sticky,
  };

  return (
    <StickyNavbarContext.Provider value={value}>
      {children}
    </StickyNavbarContext.Provider>
  );
};
