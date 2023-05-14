import React from 'react';

const VoteButton = ({ handleVote }) => {
  return (
    <div class='vote-button'>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default VoteButton;