import React from 'react';
import Link from 'next/link';

const profileImage =
  'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBvYmplY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

const username = 'GhostxD';

const ImageCard = ({ index, imageUrl }) => {
  let height;
  switch (index % 4) {
    case 0:
      height = 'h-[310px]';
      break;
    case 1:
      height = 'h-[350px]';
      break;
    case 2:
      height = 'h-[400px]';
      break;
    case 3:
      height = 'h-[390px]';
      break;
    default:
      height = 'h-[600px]';
  }

  return (
    <>
      <Link href="/posts/[id]" as={`/posts/1`}>
        <div
          className={`relative ${height} bg-cover bg-center m-1 rounded-lg group overflow-hidden`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-50 rounded p-1">
            <img
              src={profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full mr-1"
            />
            <span className="text-white">{username}</span>
          </div>
          <div className="like-button absolute top-2 right-2 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
            ❤️
          </div>
        </div>
      </Link>
    </>
  );
};

export default ImageCard;
