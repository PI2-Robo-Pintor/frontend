import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';
import HeightInput from './components/HeightInput';

function App() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button text="Altura máxima" onClick={() => console.log("123")} />
        <Title title="Altura máxima" />
        <HeightInput label={'Altura máxima'} value={maxHeight} onChangeValue={setMaxHeight}/>
        <HeightInput label={'Altura minima'} value={minHeight} onChangeValue={setMinHeight}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
