"use client";

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const useIpfsAndEthereum = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [loading, setLoading] = useState(true);

    const initContract = async () => {
      try {
        if (typeof window.ethereum !== 'undefined') {
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = web3Provider.getSigner();
          setProvider(web3Provider);
          setSigner(signer);

          const contractAddress = process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ADDRESS;
          const contractABI = JSON.parse(process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ABI);

          if (!contractAddress || !contractABI) {
            throw new Error('Contract address or ABI not provided in environment variables.');
          }

          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setContract(contract);

          const accounts = await web3Provider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } else {
          alert('Please install MetaMask or another Ethereum wallet provider to use this feature');
        }
      } catch (error) {
        console.error('Error initializing contract:', error);
        alert('Failed to initialize contract. See console for details.');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      initContract();
    }, []);

    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          await web3Provider.send("eth_requestAccounts", []);
          const signer = web3Provider.getSigner();
          const account = await signer.getAddress();
          setProvider(web3Provider);
          setSigner(signer);
          setAccount(account);

          const contractAddress = process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ADDRESS;
          const contractABI = JSON.parse(process.env.NEXT_PUBLIC_EXAM_PAPER_MANAGEMENT_CONTRACT_ABI);

          if (!contractAddress || !contractABI) {
            throw new Error('Contract address or ABI not provided in environment variables.');
          }

          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setContract(contract);
        } catch (error) {
          console.error("Error connecting to wallet:", error);
          alert('Failed to connect to wallet. See console for details.');
        }
      } else {
        console.error("No Ethereum provider found. Install MetaMask.");
        alert('Please install MetaMask or another Ethereum wallet provider to use this feature');
      }
    };

    const uploadFileToIPFS = async (file) => {
      try {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(url, formData, {
          maxContentLength: 'Infinity',
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'pinata_api_key': process.env.NEXT_PUBLIC_PINATA_API_KEY,
            'pinata_secret_api_key': process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
          },
        });

        return response.data.IpfsHash;
      } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        alert('Failed to upload file to IPFS');
        return null;
      }
    };

    const createPaper = async (paperId, ipfsHash, unlockTime, authorizedUsers) => {
      if (!contract) {
        alert('Contract not initialized. Please reload the page or reconnect your wallet.');
        return;
      }

      try {
        const transaction = await contract.createPaper(paperId, ipfsHash, unlockTime, authorizedUsers);
        await transaction.wait();
        alert('File created successfully!');
      } catch (error) {
        console.error('Error creating file:', error);
        alert('Failed to create file');
      }
    };

    return { connectWallet, uploadFileToIPFS, createPaper, contract, loading, account };
};

export default useIpfsAndEthereum;
