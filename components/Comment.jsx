import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

const Comment = () => {
  return (
    <div className=" items-center justify-center mb-4 mt-4 max-w-lg ml-[100px]">
      <form className="w-full max-w-xl bg-transparent rounded-lg  pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-white text-lg">Comments</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-transparent rounded-xl border text-white border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-transparent focus:border-white"
              name="body"
              placeholder="Add a Comment"
              //   value={message}
              //   onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="w-full md:w-full flex items-start  px-3">
            <div className="flex items-start w-1/2 text-gray-300 px-2 mr-auto">
              <BsInfoCircle />
              <p className="text-xs pl-1 md:text-sm pt-px">
                Join the Conversation.
              </p>
            </div>
            {/* {isConnected && (
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-red-700 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:opacity-90 cursor-pointer"
                  value="Post Comment"
                  //   disabled={!message}
                  //   onClick={addComments}
                />
              </div>
            )} */}

            <div className="flex mr-[calc(24px+16px)] sm:mr-0 justify-center space-x-2 items-center bg-black text-white border-primer rounded-lg pl-3 text-base font-bold h-10 sm:h-12 min-w-[105px] sm:min-w-[140px] transition-all">
              <input
                type="submit"
                value="Post Comment"
                className="cursor-pointer"
                //   onClick={notify}
              />
            </div>
          </div>
          {/* <ToastContainer autoClose={6000} /> */}
        </div>
      </form>
    </div>
  );
};

export default Comment;
