/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { BsCardImage } from 'react-icons/bs';
import { FaLongArrowAltLeft, FaRegDotCircle } from 'react-icons/fa';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { ethers } from 'ethers';
import { config } from '@/abi';
import AvalonV3 from '@/abi/AvalonV3.json';
import { formatAddress } from '@/utils/formatAddress';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PromptDetails from './PromptDetails';
import SuccessModal from './modal/SuccessModal';
import Comment from './Comment';

const nftAddress = config.avalonV3;

const owner = '0x674gyxguhbjbebehbjeh';
const name = 'Beautiful Indian';
const description = 'This is a beautiful indian';
const tokenId = '1';
const price = 1;

const PostDetails = (
  {
    //   image,
    //   name,
    //   description,
    //   attributes,
    //   tokenId,
    //   owner,
    //   metadata,
  }
) => {
  const [openModal, setOpenModal] = useState(false);
  const [maxSupply, setMaxSupply] = useState(0);
  const [ethPrice, setEthPrice] = useState();
  const [txHash, setTxHash] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  //   const getIPFSData = async (ipfsUrl) => {
  //     // Convert IPFS URL to HTTP URL
  //     const httpUrl = ipfsUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');

  //     try {
  //       const response = await axios.get(httpUrl);
  //       return response.data;
  //     } catch (error) {
  //       console.error('Error fetching IPFS data:', error);
  //       return null;
  //     }
  //   };

  //   // Usage
  //   const getPrompt = async () => {
  //     const data = await getIPFSData(metadata);
  //     setPrompt(data.attributes[3].value);
  //   };

  //   const getSupply = async () => {
  //     const provider = new ethers.providers.JsonRpcProvider(
  //       'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  //     );

  //     const supplyGetterContract = new ethers.Contract(
  //       config.avalonV3,
  //       AvalonV3,
  //       provider
  //     );

  //     const getTokenSupply = await supplyGetterContract.getMaxSupply(tokenId);
  //     const bigNumber = ethers.BigNumber.from(getTokenSupply._hex);
  //     const supplyValue = bigNumber.toNumber();
  //     setMaxSupply(supplyValue);
  //   };

  //   const getTokenPrice = async () => {
  //     const provider = new ethers.providers.JsonRpcProvider(
  //       'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  //     );

  //     const priceGetterContract = new ethers.Contract(
  //       config.avalonV3,
  //       AvalonV3,
  //       provider
  //     );

  //     const getTokenPrice = await priceGetterContract.getPrice(tokenId);
  //     // console.log(getTokenPrice._hex);
  //     const bigNumber = ethers.BigNumber.from(getTokenPrice._hex);
  //     const ethValue = ethers.utils.formatEther(bigNumber);
  //     setEthPrice(ethValue);
  //   };

  //   const mintNFT = async (e) => {
  //     e.preventDefault();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();

  //     const mintNotification = toast.loading('Please wait! Minting a Prompt NFT');

  //     const mintPromptContract = new ethers.Contract(
  //       config.avalonV3,
  //       AvalonV3,
  //       signer
  //     );

  //     const mintAmount = ethers.utils.parseEther(ethPrice.toString());

  //     const mintPromptNFT = await mintPromptContract.mint(tokenId, {
  //       value: mintAmount,
  //     });
  //     const receipt = await mintPromptNFT.wait();
  //     console.log('mintPromptNFT: ', await mintPromptNFT.hash);

  //     console.log('receipt: ', receipt);

  //     // Show success message to the user
  //     toast.update(mintNotification, {
  //       render: 'Successfully Bought NFT Prompt',
  //       type: 'success',
  //       isLoading: false,
  //       autoClose: 7000,
  //     });

  //     setTxHash(mintPromptNFT.hash);
  //     setOpenModal(true);
  //   };

  //   useEffect(() => {
  //     getTokenPrice();
  //     getPrompt();
  //   }, []);

  //   useEffect(() => {
  //     getSupply();
  //   }, []);

  //   const handleOpenModal = () => {
  //     setOpenModal(true);
  //   };

  //   const handleOnClose = () => {
  //     setOpenModal(false);
  //   };

  //   const balanceInUsd = solPrice
  //     ? (parseFloat(price) * solPrice).toFixed(2)
  //     : '---';

  // console.log(attributes);

  return (
    <>
      <div className="flex">
        <div className="w-[100%]">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78918b15-3963-4e99-aa2b-640aaaa92311/dfru889-dfc410f0-2f70-4f21-9858-2b9a6fa8d373.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4OTE4YjE1LTM5NjMtNGU5OS1hYTJiLTY0MGFhYWE5MjMxMVwvZGZydTg4OS1kZmM0MTBmMC0yZjcwLTRmMjEtOTg1OC0yYjlhNmZhOGQzNzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.phpsylpxjbEBFfGwAdcsIpgg1XQnemC15bxVuECA4dU"
            alt=""
            className="rounded-xl w-[500px] h-[800px] ml-[100px] mt-6"
          />
          <Comment />
        </div>

        <div className="text-gray-300 mt-6 ml-2">
          <div>
            <Link href="/explore">
              <p className="flex items-center text-[13px] text-purple-600 font-bold cursor-pointer">
                <FaLongArrowAltLeft className="text-2xl " />
                &nbsp;Return to explore
              </p>
            </Link>
            {/* <h1 className="text-2xl capitalize">{name}</h1> */}
            <div className="flex justify-between items-center text-gray-500 py-4 pr-[60px]">
              <div className="border flex items-center border-gray-400 text-white font-bold rounded-lg p-2">
                <span className="text-md text-gray-300">
                  {/* Creator: &nbsp;&nbsp; */}
                </span>
                <span className="flex items-center text-xl">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png"
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  &nbsp; Ghost{' '}
                </span>
                &nbsp;
                <span className=" rounded-full text-[16px]  px-3">
                  <FaRegDotCircle />
                </span>
                &nbsp;
                <span className="bg-purple-500 p-1 rounded-full text-[16px]  px-3 cursor-pointer hover:opacity-80">
                  Follow
                </span>
              </div>
              <div className="flex items-center justify-between border border-gray-500 rounded-lg p-2">
                <AiOutlineHeart className="text-3xl text-white" />
                <span className="text-lg text-white">16</span>
                {/* <span className="text-md text-gray-300"> 12</span> */}
              </div>
            </div>
            <h4 className="w-[700px] text-gray-400 pr-10 italic">
              {/* {description && <p>{description}</p>} */}
            </h4>
          </div>

          <div className="border border-gray-400 rounded-lg p-4 text-start w-[680px] italic font-semibold">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium animi excepturi facilis sapiente cupiditate quae optio,
              soluta autem laborum esse dignissimos, tenetur quibusdam maxime
              repellat quam incidunt dicta explicabo enim quisquam rem. Debitis
              nihil magni saepe neque at, quos numquam hic in eligendi,
              consequatur veritatis voluptas sint dolor velit, nemo quis ducimus
              quibusdam soluta et praesentium. Tempora reprehenderit,
              exercitationem esse consequatur nesciunt qui tenetur sed deserunt
              quam laudantium fugit saepe modi temporibus perferendis atque,
              accusantium dolorum! Nihil veritatis sunt nobis.
            </p>
          </div>

          <div className="flex items-center gap-8 justify-center mt-5">
            <span className="p-2 border border-gray-500 rounded-md font-bold">
              Create Secondary
            </span>
            <span className="p-2 border border-gray-500 rounded-md px-4 font-bold">
              Share
            </span>
            <span className="p-2 border border-gray-500 rounded-md px-4 font-bold">
              Copy
            </span>
          </div>

          <div className="text-white mt-10 bg-black/30">
            <h1 className="flex items-center gap-2 uppercase">
              Generation Parameters{' '}
              <AiOutlineQuestionCircle className="text-lg cursor-pointer" />
            </h1>
            <div className="glassmorphism items-center flex justify-center text-center mt-2 py-3 mr-5 text-lg">
              <BsCardImage />
              &nbsp; 980 X 1546
            </div>
          </div>
          <div className="text-white mt-10 bg-black/30">
            <h1 className="flex items-center gap-2 uppercase">
              Model Used{' '}
              <AiOutlineQuestionCircle className="text-lg cursor-pointer" />
            </h1>
            <div className="glassmorphism items-center flex justify-center text-center mt-2 py-3 mr-5 text-lg">
              <BsCardImage />
              &nbsp; Stable Diffusion XL
            </div>
          </div>
          <div className="text-white mt-10 bg-black/30">
            <h1 className="flex items-center gap-2 uppercase">
              Prompt Category{' '}
              <AiOutlineQuestionCircle className="text-lg cursor-pointer" />
            </h1>
            <div className="glassmorphism items-center flex justify-center text-center mt-2 py-3 mr-5 text-lg">
              <BsCardImage />
              &nbsp; Generative AI Prompts
            </div>
          </div>
        </div>
      </div>
      {/* <PromptDetails tokenId={tokenId} prompt={prompt} /> */}
      <ToastContainer />
      <SuccessModal
        openMintModal={openModal}
        handleOnClose={handleCloseModal}
        txHash={txHash}
      />
    </>
  );
};

export default PostDetails;
