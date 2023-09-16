import React from 'react';
import Nav2 from '@/components/layout/Nav2';
import Marketplace from '@/components/Marketplace';
import { useStickyNavbar } from '@/context/StickyNavbarContext';

const marketplace = () => {
  const { sticky } = useStickyNavbar();

  return (
    <div>
      <div className="bg-[url('/bg-stars.png')] bg-repeat-y bg-center relative">
        <Nav2 sticky={sticky} />
        <Marketplace />
      </div>
    </div>
  );
};

export default marketplace;
