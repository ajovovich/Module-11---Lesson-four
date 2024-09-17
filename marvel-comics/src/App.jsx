//Task 3: Setting Up Routes
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Comics from './Comics';
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CharacterList" element={<CharacterList />} />
        <Route path="/CharacterDetail" element={<CharacterDetail />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </div>
  );
};


export default App;