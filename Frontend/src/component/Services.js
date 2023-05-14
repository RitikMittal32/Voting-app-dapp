import React from 'react';
import CandidateList from './CandidateList';
import VoteButton from './VoteButton';

const Services = ({ candidates, selectedCandidate, setSelectedCandidate, handleVote }) => {
  return (
    <>
      
      <CandidateList
        candidates={candidates}
        selectedCandidate={selectedCandidate}
        setSelectedCandidate={setSelectedCandidate}
      />
      <VoteButton handleVote={handleVote} />

    </>
  );
};

export default Services;
