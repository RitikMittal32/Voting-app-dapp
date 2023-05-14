import React, { useState, useEffect } from 'react';
import Voting from './component/web3';
import Web3 from 'web3';
import './App.css';
import contractabi from './contract';
import { Routes, Link, Route } from 'react-router-dom';
import Services from './component/Services';
import Home from './component/Home';

const VotingApp = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [voted, setVoted] = useState(false);
  const [votingResults, setVotingResults] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState('');
  const [showAddCandidateForm, setShowAddCandidateForm] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const contractABI = contractabi;
  const contractAddress = "0xAbb34b4e3daC9DF991Bb345782b5076C9c05bE48";
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  const fetchCandidates = async () => {
    try {
      const candidateData = await contractInstance.methods.getCandidates().call();
      setCandidates(candidateData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleVote = async () => {
    try {
      await contractInstance.methods.vote(selectedCandidate).send({ from: window.ethereum.selectedAddress });
      setVoted(true);
      fetchVotingResults();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVotingResults = async () => {
    try {
      const results = await contractInstance.methods.getVotingResults().call();
      setVotingResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCandidate = async () => {
    try {
      await contractInstance.methods.addCandidate(newCandidateName).send({ from: window.ethereum.selectedAddress });
      setShowAddCandidateForm(false);
      setNewCandidateName('');
      fetchCandidates();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="banner-text">
        <ul>
          <li>
        <Link to="/" onClick={() => setActiveLink('Home')}>
              Addcandidate </Link></li>
          <li>About</li>
          <li>Contact</li>
          <li> <Link to="/Services" onClick={() => setActiveLink('Services')}>
              VoteCandidate
            </Link></li>
        </ul>
      </div>

      
      <div className="animation-area">
      {activeLink === 'Services' ? (
        
          

          <Services
            candidates={candidates}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
            handleVote={handleVote}
            setShowAddCandidateForm={setShowAddCandidateForm}
          />
    

          ):(
          activeLink === 'Home' && (
       
     
          <Home
            newCandidateName={newCandidateName}
            setNewCandidateName={setNewCandidateName}
            handleAddCandidate={handleAddCandidate}
            setShowAddCandidateForm={setShowAddCandidateForm}
          />

        )
        )}
    
          {/* <div>
            <h2>Thank you for voting!</h2>
            <h3>Voting Results:</h3>
            <ul>
              {votingResults.map((result) => (
                <li key={result.candidateId}>
                  {result.candidateName}: {result.voteCount}
                </li>
              ))}
            </ul>
          </div> */}

      </div>
      <div className="App">
        <Voting />
      </div>

    </>
  );
};

export default VotingApp;
