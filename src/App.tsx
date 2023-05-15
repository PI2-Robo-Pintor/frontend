import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from './settings/globalStyles';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPainting from './pages/NewPainting';
import Preferences from './pages/Preferences';
import PaintTest from './pages/PaintTest';
import Header from './components/Header';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-painting" element={<NewPainting />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/test" element={<PaintTest />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </UserProvider>
  );
}

export default App;

