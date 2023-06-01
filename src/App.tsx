import React, { useEffect } from 'react';

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
import OngoingPainting from './pages/OngoingPainting';
import HeightConfig from './pages/HeightConfig';

import mqttClient from 'u8-mqtt/esm/web/index.js'

function App() {
  let client
  useEffect(() => {
    async function connect() {
      client = mqttClient().with_websock('ws://172.16.1.196:9883')

        await client.connect()

        client.subscribe_topic(
          'pi2/:topic',
          (packet, params, context) => {
            console.log('topic packet', params, packet, packet.json());
            console.log( packet);
            // console.log(packet.json());
            var message = packet.json().note
            alert(message)
          }
        )

        await client.json_send(
          'pi2/novo-topico',
          {
            note: 'from web bundle example',
            live: new Date().toISOString()
          }
        )
    }

    connect()

    return () => client.disconnect()
  }, [])

  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-painting" element={<NewPainting />} />
            <Route path="/new-painting/:typeHeight" element={<HeightConfig />} />
            <Route path="/ongoing-painting" element={<OngoingPainting />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/test" element={<PaintTest />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

