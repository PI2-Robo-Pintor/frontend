import React, { useState, useEffect } from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import paintOptions from './utils/paintOptions';
import GlobalStyle from './settings/globalStyles';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPainting from './pages/NewPainting';
import Preferences from './pages/Preferences';
import PaintTest from './pages/PaintTest';

function App() {
  const [maxHeight, setMaxHeight] = useState(10);
  const [minHeight, setMinHeight] = useState(10);
  const [paintOption, setPaintOption] = useState(paintOptions[0].value);

  useEffect(() => {
    console.log(maxHeight);
    console.log(minHeight);
    console.log(paintOption)
  }, [maxHeight, minHeight, paintOption])

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-painting" element={<NewPainting />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/test" element={<PaintTest />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

