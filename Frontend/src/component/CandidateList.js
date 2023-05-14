import React from 'react';

const CandidateList = ({ candidates, selectedCandidate, setSelectedCandidate }) => {
  return (
    <div>
      <h2 className='Candi'>Select a Candidate</h2>
      <ul>
        {candidates.map(candidate => (
          
          <div class='Candiform' key={candidate.id}>
            <li>
              <label>
                <input
                  type="radio"
                  name="candidate"
                  value={candidate.id.toString()}
                  checked={selectedCandidate === candidate.id.toString()}
                  onChange={event => setSelectedCandidate(event.target.value)}
                />
                <div className='candidatename'>
                {candidate.name}
                </div>
              </label>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;



