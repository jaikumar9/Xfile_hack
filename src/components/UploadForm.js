import React, { useState } from 'react';
import useIpfsAndEthereum from '../hooks/useIpfsAndEthereum';
import { ethers } from 'ethers';

const UploadForm = () => {
  const { connectWallet, uploadFileToIPFS, createPaper } = useIpfsAndEthereum();
  const [file, setFile] = useState(null);
  const [unlockTime, setUnlockTime] = useState('');
  const [authorizedUsers, setAuthorizedUsers] = useState('');
  const [loading, setLoading] = useState(false);
  const [paperId, setPaperId] = useState('');
  const [showPaperId, setShowPaperId] = useState(false);
  const [copied,setCopied] = useState(false);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await connectWallet();
      const ipfsHash = await uploadFileToIPFS(file);
      const newPaperId = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(ipfsHash));

      const unlockTimestamp = new Date(unlockTime).getTime() / 1000;
      const authorizedAddresses = authorizedUsers.split(',').map(addr => addr.trim());

      await createPaper(newPaperId, ipfsHash, unlockTimestamp, authorizedAddresses);

      // If the transaction is successful, update the state to show the paperId
      setPaperId(newPaperId);
      setShowPaperId(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
      // Ensure that paperId and showPaperId are not updated on failure
      setPaperId('');
      setShowPaperId(false);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    // Reset form fields and hide paperId div

    location.reload(true);
  };
  

  const shortPaperId = (paperId, strLen) => {
    if (paperId.length <= strLen) return paperId;
    const seperator = '...';
    let seperatorLength = seperator.length;
    const charsToShow = strLen - seperatorLength;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return (
      paperId.substring(0, frontChars) +
      seperator +
      paperId.substring(paperId.length - backChars)
    );
  };
const pid = shortPaperId(paperId,19);

const copylink = (e) => {
  navigator.clipboard.writeText(paperId);
  setCopied(true);
}
  return (
    <div className='md:w-[25rem] p-4 m-auto border-2 rounded-xl '>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900" htmlFor="file">Upload File :</label>
        <input onChange={handleFileChange} required className="shadow-md block w-full text-sm text-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-600 focus:outline-none dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-600 mb-4 p-2" aria-describedby="user_avatar_help" id="file" type="file" />
        
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900" htmlFor="unlockTime">Time to Unlock :</label>
        <input type="datetime-local" value={unlockTime} onChange={(e) => setUnlockTime(e.target.value)} required className='mb-4 p-2 rounded-lg shadow-md ' />
        
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900" htmlFor="authorizedUsers">Addresses of authorized users :</label>
        <input className='p-2 mb-4 rounded-lg shadow-md ' type="text" placeholder="Authorized Users (comma separates addresses)" value={authorizedUsers} onChange={(e) => setAuthorizedUsers(e.target.value)} required />
        
        {showPaperId && (
          <div id="paperId" className='font-medium text-gray-900 dark:text-gray-900'>
            <div className='flex '>
            <p className="mb-1 text-md font-bold text-gray-900 dark:text-gray-900">File Id: {pid} </p>
            <button onClick={copylink} type="button" class="text-white ml-3 bg-blue-900 hover:bg-blue-700 focus:ring-0 focus:border-transparent font-medium rounded-lg text-sm px-4 py-1 me-2 mb-2  focus:outline-none">{copied ? 'Copied' :  'Copy File Id'}</button>
            </div>
            <p className='text-[15px] mb-3 font-semibold'>( Store the File Id safely to retrieve the file again.)</p>
            <button className='bg-blue-900 text-white text-sm w-36 rounded-xl p-2 font-semibold' type="button" onClick={handleRefresh}>Refresh</button>
            
          </div>
        )}
        
        {!showPaperId && (
          <button className='bg-blue-900 hover:bg-blue-600 hover:transition-colors  text-white w-36 mx-auto rounded-xl p-2 font-semibold' type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Submit'}
          </button>
          
        )}
      </form>
    </div>
  );
};

export default UploadForm;
