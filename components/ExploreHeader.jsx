import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ExploreHeader = () => {
  return (
    <div className="text-white text-center bg-[url('/fight.webp')] bg-repeat-x bg-center relative mb-6 py-20">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-10">
        <h1 className="text-5xl py-3 pt-2 font-bold">Avalon AI</h1>
        <p className="pb-4 pt-1 italic">
          Connect with like-minded individuals while exploring millions of AI
          art images created by models like Stable Diffusion, Midjourney, and
          more!
        </p>

        <form className="pb-5 pt-2 px-[300px]">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search AI Images..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-primer font-bold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="text-white flex items-center justify-center gap-3 text-[11px] pb-7 font-bold">
          <h4>Search by Model</h4>
          <div className="flex gap-2">
            <button className="flex items-center p-2 border border-gray-300 rounded-full">
              <span>
                <BsSearch />
              </span>
              &nbsp;Stable Diffusion
            </button>
            <button className="flex items-center p-2 border border-gray-300 rounded-full">
              <span>
                <BsSearch />
              </span>
              &nbsp;Dall-E
            </button>
            <button className="flex items-center p-2 border border-gray-300 rounded-full">
              <span>
                <BsSearch />
              </span>
              &nbsp;Openjourney
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
