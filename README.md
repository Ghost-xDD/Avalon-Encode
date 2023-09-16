## Avalon AI

Avalon AI is an innovative AI prompt marketplace built on the Ethereum Blockchain. Drawing inspiration from platforms like Promptbase and PromptHero, Avalon AI takes a step further by allowing users to not only generate images using AI models but also convert these images into NFTs.

### Features

- **AI-Powered Image Generation**: Utilize cutting-edge AI models like Stable Diffusion and DALL·E to transform text prompts into captivating images.

- **NFT Creation**: Once you're satisfied with the generated image, seamlessly convert it into an NFT. Add essential metadata such as the name, description, and the original prompt used for image generation. You can also specify other parameters like the maximum supply and price of the NFT.
  
- **ENS Integration**: User's can directly use their ENS names and avatars as their usernames on Avalon.

  **NOTE:** **Users without an ENS name can directly register their own web3 usernames within the dapp. This is possible, thanks to our integration with ENS Widgets.**
  
- **Tokengated Prompts**: In a unique twist, the prompts used for generating images are tokengated. This means only users who purchase the NFT can access the original prompt. This allows them to generate secondary images using the exclusive prompt they've acquired.

- **Smart Contract Integration**: While the UI integration is still in progress, the underlying smart contract for the marketplace has been successfully built and deployed. The demo version allows users to buy NFTs directly from the NFT smart contract.

- **OpenSea API Integration**: Avalon AI leverages the OpenSea API to fetch all NFT data from the Ethereum Goerli testnet. This integration also facilitates the tokengating of prompts, allowing only authorized users to access the prompt used to generate the image.

- **Derivative Prompt Images**: When a user buys a prompt NFT on Avalon, they get access to the prompt used in generating the image. They can then use that accessed prompt to generate a secondary derived image using the prompt and list on the marketplace.

## Smart Contract Address

- AvalonV3:
- Avalon Prompt Marketplace:

## Tech Stack

| Component                      | Technology/Service                                                                                                     | Description                                                                                                                                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Image Generation**           | [Stable Diffusion](https://stability.ai/stablediffusion) - "stable-diffusion-xl-beta-v2-2-2" release from Stability AI | Utilized for generating high-quality images based on user-defined prompts.                                                                                                                         |
| **ENS / Username Registration**           | [ENS Widgets](https://github.com/gskril/ens-widgets)  | Enables users register an ENS name directly within the app.                                                                                                                         |
| **NFT Metadata Storage**       | [NFT.storage](https://nft.storage/)                                                                                    | Employs IPFS to ensure decentralized and persistent storage of prompt NFT metadata.                                                                                                                |
| **Smart Contract Development** | [Solidity](https://soliditylang.org/)                                                                                  | Used to craft the ERC1155 Smart Contract that facilitates AI prompt to NFT conversion and underpins the marketplace functionalities.                                                               |
|                                | ERC1155 Marketplace                                                                                                    | The smart contract for the marketplace has been built and deployed, but is yet to be implemented in the UI. For the demo, users can create and purchase NFTs directly from the NFT Smart contract. |
| **NFT Metadata Retrieval**     | [OpenSea API](https://docs.opensea.io/reference/api-overview)                                                          | Integrated to fetch comprehensive NFT metadata from the Ethereum Goerli.                                                                                                                 |
| **Blockchain Interaction**     | [Ethers.js](https://docs.ethers.io/)                                                                                   | Facilitates seamless interaction with smart contracts on the Ethereum blockchain.                                                                                                                  |
| **Authentication**             | [RainbowKit](https://www.rainbowkit.com/docs/introduction) & [WAGMI](https://wagmi.sh/)                                | Integrated to provide a streamlined and secure sign-in experience.   - Also used to resolve the user's ENS name and avata                                                                                                                              |

## Screenshots
### Home
![localhost_3001_](https://github.com/Ghost-xDD/Avalon/assets/42726051/d56daf85-7624-45f6-9042-2d019addd30e)

### Explore prompts
![localhost_3001_explore](https://github.com/Ghost-xDD/Avalon/assets/42726051/97095fe6-e8ea-4e5a-a9c5-878acc86539c)

### Select Prompt Modal
![create a](https://github.com/Ghost-xDD/Avalon/assets/42726051/7892f573-c0f8-47c4-ac6a-c5cf99557d83)

### Generate Images Using Descriptive prompts / Convert to NFTs
![localhost_3001_create](https://github.com/Ghost-xDD/Avalon/assets/42726051/81ae4a9a-3c8b-4b57-bb14-dcc0f2d67186)

### Profile
![localhost_3001_profile png344](https://github.com/Ghost-xDD/Avalon/assets/42726051/65cae4de-3401-49e7-b7a4-94b60901edf7)

### Register your Web3 username within the app
![register](https://github.com/Ghost-xDD/Avalon/assets/42726051/ec24fe25-8969-4625-b1d1-02ba1668eb53)

### Prompt NFT Detail Page (Locked)
![avalon-locked](https://github.com/Ghost-xDD/Avalon/assets/42726051/5d81c86a-f50a-445d-b694-8b533d791fba)

### Prompt NFT Detail Page (Unlocked)
![localhost_3001_details_12(mod)](https://github.com/Ghost-xDD/Avalon/assets/42726051/67aa9b7c-8162-4bf1-a926-fa7c326a7dbf)







## Getting Started

### Clone the repository

`git clone https://github.com/0xTemplar/Avalon-AI.git`

### Navigate to the project directory

`cd Avalon-AI`

### Install dependencies

`npm install`

# Start the application

`npm run dev`
