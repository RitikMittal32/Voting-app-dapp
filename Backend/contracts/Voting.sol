//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidatesCount;

    mapping(address => bool) public voters;

    event Voted(uint256 indexed candidateId);

    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            addCandidate(_candidateNames[i]);
        }
    }

    function addCandidate(string memory _name) public payable {

        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint256 _candidateId) public payable {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");
        require(!voters[msg.sender], "You have already voted");

        candidates[_candidateId].voteCount++;
        voters[msg.sender] = true;

        emit Voted(_candidateId);
    }

    function getCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory result = new Candidate[](candidatesCount);
        for (uint256 i = 1; i <= candidatesCount; i++) {
            result[i - 1] = candidates[i];
        }
        return result;
    }

    function getVotingResults() public view returns (uint256[] memory, string[] memory, uint256[] memory) {
        uint256[] memory ids = new uint256[](candidatesCount);
        string[] memory names = new string[](candidatesCount);
        uint256[] memory voteCounts = new uint256[](candidatesCount);

        for (uint256 i = 1; i <= candidatesCount; i++) {
            ids[i - 1] = candidates[i].id;
            names[i - 1] = candidates[i].name;
            voteCounts[i - 1] = candidates[i].voteCount;
        }

        return (ids, names, voteCounts);
    }
}