import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import SongTitles from './components/SongTitles';
import Canvas from './components/Canvas';
import Lyrics from './components/Lyrics';

function App() {
  const [selectedSong, setSelectedSong] = useState('');
  console.log('selectedSong', selectedSong);
  console.log('setSelectedSong', setSelectedSong);

  return (
    <div>
      <Title />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <SongTitles />
        <Canvas />
        <Lyrics />
      </div>
    </div>
  );
}

export default App;
