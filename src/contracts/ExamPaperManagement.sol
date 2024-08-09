// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import IPFSStorage contract interface
import "./IPFSStorage.sol";

contract ExamPaperManagement {
    struct ExamPaper {
        address creator;
        bytes32 ipfsCID; // IPFS Content Identifier (CID) of the encrypted exam paper
        uint unlockTime; // Unix timestamp when the paper can be accessed
        address[] authorizedUsers; // Addresses of authorized users who can access the paper
        bool isLocked;
    }

    mapping(bytes32 => ExamPaper) public examPapers;
    mapping(address => bool) public isAdmin;

    event PaperCreated(bytes32 indexed paperId, address indexed creator);
    event PaperUnlocked(bytes32 indexed paperId, address indexed user);

    // IPFS storage contract
    IPFSStorage public ipfsStorage;

    constructor(address _ipfsStorageAddress) {
        isAdmin[msg.sender] = true; // Set contract deployer as admin
        ipfsStorage = IPFSStorage(_ipfsStorageAddress); // Initialize IPFS storage contract
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can perform this action");
        _;
    }

    function createPaper(bytes32 paperId, string memory ipfsHash, uint unlockTime, address[] memory authorizedUsers) external {
        require(!examPapers[paperId].isLocked, "Paper with this ID already exists and is locked");

        // Store the paper on IPFS
        ipfsStorage.uploadFile(paperId, ipfsHash);

        examPapers[paperId] = ExamPaper({
            creator: msg.sender,
            ipfsCID: paperId, // Store the CID of the paper on IPFS
            unlockTime: unlockTime,
            authorizedUsers: authorizedUsers,
            isLocked: true
        });

        emit PaperCreated(paperId, msg.sender);
    }

    function unlockPaper(bytes32 paperId) external {
        require(block.timestamp >= examPapers[paperId].unlockTime, "Paper cannot be accessed yet");
        require(isAuthorizedUser(paperId, msg.sender), "You are not authorized to access this paper");

        examPapers[paperId].isLocked = false;

        emit PaperUnlocked(paperId, msg.sender);
    }

    function isAuthorizedUser(bytes32 paperId, address user) internal view returns (bool) {
        for (uint i = 0; i < examPapers[paperId].authorizedUsers.length; i++) {
            if (examPapers[paperId].authorizedUsers[i] == user) {
                return true;
            }
        }
        return false;
    }

    // Admin functions
    function addAdmin(address newAdmin) external onlyAdmin {
        isAdmin[newAdmin] = true;
    }

    function removeAdmin(address adminToRemove) external onlyAdmin {
        isAdmin[adminToRemove] = false;
    }

    // Fallback function to receive ETH
    receive() external payable {}

    // Fallback function to receive ETH
    fallback() external payable {}
}
