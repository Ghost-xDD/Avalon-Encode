import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { config } from '@/abi';
import axios from 'axios';
import ImageCard from './ImageCard';
import ExploreHeader from './ExploreHeader';
// import ShowUIButton from './ShowUIButton';
import dynamic from 'next/dynamic';

const ShowUIButton = dynamic(
  () => import('./ShowUIButton'),
  { ssr: false } // This will load the component only on the client side
);

const Explore = () => {
  const [listedNFTs, setListedNFTs] = useState([]);
  const chainName = 'goerli';
  const API_URL = `https://testnets-api.opensea.io/v2/chain/${chainName}/contract/${config.avalonV3}/nfts`;
  const apiKey = process.env.NEXT_PUBLIC_OPENSEA_KEY;

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
          !['7', '8', '9', '6', '10', '13', '14', '18', '21'].includes(
            token.identifier
          )
      );

      // console.log(tokens);
      setListedNFTs(filteredTokens);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const items = listedNFTs.map((nft, index) => (
    <ImageCard key={index} index={index} imageUrl={nft.image_url} />
  ));

  return (
    <div className="">
      <div className="fixed z-20 bottom-6 right-3">
        <ShowUIButton />
      </div>
      <ExploreHeader />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
      >
        <Masonry columnsCount={5} gutter="-1px">
          {items}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Explore;
