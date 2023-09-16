import React from 'react';
import TabHeadless from './tab/ExploreTab';

const MarketplaceHeader = () => {
  return (
    <div>
      <h1 className="text-center text-xl text-white mt-6 gradient-text">
        Marketplace Prompts
      </h1>
      <div className="ml-[60px]">
        <TabHeadless />
        {/* <p className="text-white">Polygon</p> */}
      </div>
    </div>
  );
};

export default MarketplaceHeader;
