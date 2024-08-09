// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSStorage {
    mapping(bytes32 => string) public ipfsFiles; // Mapping to store IPFS CIDs

    event FileUploaded(bytes32 indexed fileId, string ipfsHash);

    // Function to upload a file to IPFS and store its CID
    function uploadFile(bytes32 fileId, string memory ipfsHash) external {
        require(bytes(ipfsFiles[fileId]).length == 0, "File with this ID already exists");

        ipfsFiles[fileId] = ipfsHash;

        emit FileUploaded(fileId, ipfsHash);
    }

    // Function to retrieve the IPFS CID of a file by fileId
    function getFileIpfsHash(bytes32 fileId) external view returns (string memory) {
        return ipfsFiles[fileId];
    }
}
