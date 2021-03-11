import React from 'react';
import BTCard from './components/BTCard';
import Comments from './components/comments';
import PUCard from './components/pucard';
import Title from './components/Title';
import './App.css';


function App() {
  return (
      <div className="App">
<Title/>
<BTCard/>
<BTCard/>
<BTCard/>
<BTCard/>
<BTCard/>
<BTCard/>
<PUCard/>
<PUCard/>
<PUCard/>
<PUCard/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
      </div> 
  );
}
export default App;