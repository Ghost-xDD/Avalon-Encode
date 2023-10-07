import React from 'react';
import Nav2 from '@/components/layout/Nav2';
import PostDetails from '@/components/PostDetails';

const IdPage = () => {
  return (
    <div className="bg-[url('/bg-stars.png')] bg-repeat-y bg-center relative">
      <Nav2 />
      <PostDetails />
    </div>
  );
};

export default IdPage;
