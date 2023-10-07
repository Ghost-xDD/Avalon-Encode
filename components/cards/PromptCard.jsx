/* eslint-disable @next/next/no-img-element */
import { formatAddress } from '@/utils/formatAddress';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ethers } from 'ethers';
import AvalonV3 from '@/abi/AvalonV3.json';
// import AvalonPromptMarketplace from "@/abi/AvalonPromptMarketplace.json";
import { config } from '@/abi';
import axios from 'axios';

const avalancheAddress = config.avalonV3;

const getRandomWord = () => {
  const words = ['Rare', 'Common'];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const PromptCard = ({
  tokenId,
  seller,
  price,
  model,
  img,
  name,
  chainAddress,
}) => {
  const [ethPrice, setEthPrice] = useState();
  const [sellerAddress, setSellerAddress] = useState('');

  const chainName = 'goerli';
  const API_URL = `https://testnets-api.opensea.io/v2/chain/${chainName}/contract/${config.avalonV3}/nfts/${tokenId}`;
  const apiKey = process.env.NEXT_PUBLIC_OPENSEA_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const tokens = response.data.nft.owners[0].address;

      setSellerAddress(tokens);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getTokenPrice = async (e) => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    );

    const priceGetterContract = new ethers.Contract(
      config.avalonV3,
      AvalonV3,
      provider
    );

    const getTokenPrice = await priceGetterContract.getPrice(tokenId);
    // console.log(getTokenPrice._hex);
    const bigNumber = ethers.BigNumber.from(getTokenPrice._hex);
    const ethValue = ethers.utils.formatEther(bigNumber);
    setEthPrice(ethValue);
  };

  useEffect(() => {
    getTokenPrice();
    fetchData();
  }, []);

  return (
    <div className="border-gradient relative mb-10 flex justify-center items-center rounded-lg">
      <div className="w-full p-2 h-full cursor-pointer overflow-hidden rounded-2xl flex flex-col items-center bg-black">
        <Link href="/details/[id]" as={`/details/${tokenId}`}>
          <img
            src={img}
            alt=""
            className="w-[250px] h-[300px] object-cover rounded-[30px] transition-all duration-500 hover:opacity-90 pt-2"
          />
        </Link>

        <div className="flex items-center justify-between gap-4 w-full">
          <div className="w-full">
            <div>
              <img
                src="https://www.cdnlogo.com/logos/e/81/ethereum-eth.svg"
                alt=""
                className="w-[34px] h-[35px] p-1 absolute top-4 right-3 bg-white rounded-2xl"
              />
            </div>

            <span className="text-gray-300 absolute top-4 left-4 bg-purple-700 p-1 px-4 text-sm rounded-full font-bold">
              Stable Diffusion
            </span>

            <h3 className="mt-1 text-md text-center font-bold text-gray-300 w-full pt-2">
              {name}
            </h3>
            <div className="flex items-center  mt-1 justify-center w-full text-gray-300">
              <div className="flex items-center  w-full mx-[20px]">
                {/* <img
                  src={
                    ensAvatar
                      ? ensAvatar
                      : 'https://static.vecteezy.com/system/resources/thumbnails/004/257/968/small/abstract-purple-fluid-wave-background-free-vector.jpg'
                  }
                  alt=""
                  className="w-[30px] rounded-[30px] ml-[12px]"
                /> */}
                &nbsp;
                <div className="flex flex-col ">ghostxd.eth</div>
              </div>
            </div>

            <div className="flex justify-center text-gray-300 gap-12 pt-2">
              <div className="flex flex-col">
                <p>Price:</p>
                <p>{ethPrice} ETH </p>
              </div>
              <div className="flex flex-col">
                <p>Rarity:</p>
                <p>{getRandomWord()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
