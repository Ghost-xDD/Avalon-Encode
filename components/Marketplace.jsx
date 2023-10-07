import React, { useEffect, useState } from 'react';
import PromptCard from './cards/PromptCard';
import ExploreTab from './tab/ExploreTab';
import { formatAddress } from '@/utils/formatAddress';
import axios from 'axios';
import AvalonPromptMarketplace from '@/abi/AvalonPromptMarketplace.json';
import { ethers } from 'ethers';
import { config } from '@/abi';
import convertArrayToObject from '@/utils/convertToObject';
import ShowUIButton from './ShowUIButton';

const Marketplace = () => {
  const [listedNFTs, setListedNFTs] = useState([]);
  const chainName = 'goerli';
  const API_URL = `https://testnets-api.opensea.io/v2/chain/${chainName}/contract/${config.avalonV3}/nfts`;
  const apiKey = '474531d79fc84739a3b03950c9430bda';

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      // Parse the response to retrieve the ERC1155 tokens
      const tokens = response.data.nfts;

      // Filter out tokens with the identifiers "7", "8", and "9"
      const filteredTokens = tokens.filter(
        (token) =>
          !['7', '8', '9', '6', '10', '13', '14', '18'].includes(
            token.identifier
          )
      );

      // console.log(filteredTokens);
      setListedNFTs(filteredTokens);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="fixed z-20 bottom-6 right-3">
        <ShowUIButton />
      </div>
      <h1 className="text-center text-xl text-white mt-6 gradient-text">
        Explore Premium AI Prompts
      </h1>
      <div className="ml-[60px] flex items-center justify-between mr-[60px]">
        <ExploreTab />
        <div className="text-gray-400 flex items-center">
          <p className="py-2 px-3 rounded-xl bg-white/[0.12]">Chain:</p>
          &nbsp;
          <p className="font-bold flex items-center py-2 px-3 rounded-xl bg-white/[0.12]">
            <img
              src="https://www.cdnlogo.com/logos/e/81/ethereum-eth.svg"
              alt=""
              className="w-[34px] h-[35px] p-1  rounded-2xl"
            />
            Ethereum
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6 mt-4 mx-[60px]">
        {listedNFTs.length > 0 && // Check if the array is not empty
          listedNFTs.map((nft, index) => (
            <PromptCard
              key={index}
              img={nft.image_url}
              tokenId={nft.identifier} // Access the tokenId property
              name={nft.name}
              chainAddress={nft.address}
            />
          ))}
      </div>
    </>
  );
};

export default React.memo(Marketplace);
