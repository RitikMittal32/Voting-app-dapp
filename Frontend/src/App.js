import react from 'react';
import {Route,Routes} from 'react-router-dom';
import VotingApp from './VotingApp';


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<VotingApp />} />
      <Route path="/Services" element={<VotingApp />} />
      </Routes>
  );
};

export default App;