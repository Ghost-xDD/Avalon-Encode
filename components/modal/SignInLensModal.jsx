/* eslint-disable @next/next/no-html-link-for-pages */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const SignInLensModal = ({ openLensModal, handleOnClose, lensLogin }) => {
  return (
    <>
      <Transition appear show={openLensModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-serif"
          onClose={handleOnClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl pt-6 bg-black/60 border border-gray-400 p-6 text-left align-middle shadow-xl transition-all z-50">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold italic leading-6 text-center py-4 text-gray-100 "
                  >
                    Sign in With Lens
                  </Dialog.Title>

                  <div className="mt-1 flex flex-col gap-2 w-full text-center items-center justify-center">
                    <div className="py-1">
                      <img
                        src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ewu4e1aa8agfntz9hruj"
                        alt=""
                        className="rounded-full w-[90px]"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-purple-500  focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70"
                      onClick={lensLogin}
                    >
                      Proceed
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignInLensModal;
