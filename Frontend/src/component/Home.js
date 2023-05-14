import React, { useState } from 'react';

const Home = ({candidate, handleAddCandidate, showAddCandidateForm, setShowAddCandidateForm }) => {

  const [newCandidateName, setNewCandidateName] = useState('');

  const handleInputChange = (event) => {
    setNewCandidateName(event.target.value);
  };


  
  const handleSubmit = () => {
    handleAddCandidate(newCandidateName);
    setNewCandidateName('');
    setShowAddCandidateForm(prevState => !prevState);
  };

  return (
    <>
      <div className="addcandidateform">
        <h2 className="AddC">Add a Candidate</h2>
        <input
          type="text"
          value={newCandidateName}
          onChange={handleInputChange}
          placeholder="Enter candidate name"
        />
      </div>
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </>
  );
};

export default Home;
