import React from 'react';
import Nav2 from '@/components/layout/Nav2';
import Explore from '@/components/Explore';
import { useStickyNavbar } from '@/context/StickyNavbarContext';
import ShowUIButton from '@/components/ShowUIButton';

const explore = () => {
  const { sticky } = useStickyNavbar();

  return (
    <div>
      <div className="bg-[url('/bg-stars.png')] bg-repeat-y bg-center relative">
        <Nav2 sticky={sticky} />
      </div>

      <Explore />
      <ShowUIButton />
    </div>
  );
};

export default explore;
