import './App.css';
import React, { useState } from'react';
import MainList from './MainList/MainList';
import SavedList from './SavedList/SavedList';
import TWSContext from './TWSMapContext';

function App() {
  const [twsElements, setTwsElements] = useState([]);
  return (
    <TWSContext.Provider value={[twsElements, setTwsElements]}>
      <div className="App">
        <MainList />
        <SavedList />
      </div>
    </TWSContext.Provider>
  );
}

export default App;
