'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// Get projectId from WalletConnect Cloud
const projectId = '5213d2f22d1278c8314bd75c39d90c95'

// Define chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
}

const testnet = {
  chainId: 80002,
  name: 'Amoy',
  currency: 'Matic',
  explorerUrl: 'https://amoy.polygonscan.com/',
  rpcUrl: ' https://80002.rpc.thirdweb.com',
}

// Metadata for your app
const metadata = {
  name: 'Xfile',
  description: 'Decentralized File Locker',
  url: 'https://xfile-hack.vercel.app/', // Ensure this matches your domain
  icons: ['http://localhost:3000/']
}

// Create Ethers configuration with auth options
const ethersConfig = defaultConfig({
  metadata,
  auth: {
    email: true,
    socials:['google','x'],
    showWallets: true, // Show wallets  
    walletFeatures: true // Enable wallet features
  },
  enableEIP6963: true, // Enable EIP6963
  enableInjected: true, // Enable injected wallets
  enableCoinbase: true, // Enable Coinbase wallet
  rpcUrl: '...', // RPC URL for Coinbase SDK
  defaultChainId: 1 // Default chain ID for Coinbase SDK
})

// Create Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [testnet],
  projectId,
  enableOnramp: true,
  enableAnalytics: true // Enable analytics
})

export function Web3Modal({ children }) {
  return children
}

