"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import useIpfsAndEthereum from '@/hooks/useIpfsAndEthereum';
import { createWeb3Modal, useWeb3Modal, useWalletInfo } from '@web3modal/ethers5/react';

const Navbar = () => {
  const { loading } = useIpfsAndEthereum();

  createWeb3Modal();
  const { open } = useWeb3Modal();
  const conn = useWalletInfo().walletInfo;

  const router = useRouter();

  return (
    <div>
      <nav className="backdrop-blur-sm fixed w-full h-[73px] z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center dark:text-black-600 text-black-600 justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo2.png" className="sm:h-12 h-10" alt="Logo" />
            <span className="self-center font-mono md:text-3xl text-2xl sm:font-semibold font-bold whitespace-nowrap text-black">Xfile</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className="relative md:inline-flex sm:hidden hidden h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={() => { open({ view: '' }) }}
              disabled={loading}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black md:px-7 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
                {conn != undefined ? 'View Wallet' : 'Connect Wallet'}
              </span>
            </button>
            <button onClick={() => document.getElementById('dropdown').classList.toggle('hidden')} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="dropdown" aria-expanded="false" aria-hidden="true">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 backdrop-blur-md" id="dropdown">
            <ul className="flex flex-col sm:text-blue text-white p-4 md:p-0 mt-4 font-medium backdrop-blur-md border border-gray-100 rounded-lg sm:bg-indigo-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a onClick={() => router.push('/')} className="block py-2 px-3 rounded sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700 text-black">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700 text-black">About</a>
              </li>
              <li>
                <a onClick={() => router.push('/App')} className="block py-2 px-3 rounded sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700 text-black">App</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
