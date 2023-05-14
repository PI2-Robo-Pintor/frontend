import React, { useState, useEffect } from 'react';

import './App.css';
import logo from './logo.svg';
import { RobotChecklist } from './assets/images/robotChecklist';
import { RobotMeasuring } from './assets/images/robotMeasuring';
import { RobotRefiling } from './assets/images/robotRefiling';
import { RobotSatisfied } from './assets/images/robotSatisfied';
import { RobotThinking } from './assets/images/robotThinking';
import { HeaderPainting } from './assets/images/headerPainting';

import Button from './components/Button';
import Title from './components/Title';
import HeightInput from './components/HeightInput';
import SelectComponent from './components/SelectComponent';
import paintOptions from './utils/paintOptions';
import InfoComponent from './components/InfoComponent';
import GlobalStyle from './settings/globalStyles';
import Footer from './components/Footer';

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
      <GlobalStyle />
      <Title title="Altura máxima" />
      <Button text="Iniciar Pintura" onClick={() => console.log("123")} />
      <HeightInput label={'Altura máxima'} value={maxHeight} onChangeValue={setMaxHeight}/>
      <HeightInput label={'Altura mínima'} value={minHeight} onChangeValue={setMinHeight}/>
      <SelectComponent label={'Tipo de pintura'} paintOption={paintOption} paintOptions={paintOptions} onChangeValue={setPaintOption}/>
      <Button text="Parar Pintura" onClick={() => console.log("123")} color={'stop'}/>

      <div className='teste'>
        <div>
          <InfoComponent label={'Altura máxima'} value={maxHeight}/>
          <InfoComponent label={'Altura mínima'} value={minHeight}/>
          <InfoComponent label={'Tipo de pintura'} value={paintOption}/>
        </div>
      </div>
      <RobotChecklist />
      <RobotMeasuring />
      <RobotRefiling />
      <RobotSatisfied />
      <RobotThinking />
      <HeaderPainting />
      <Footer />

    </div>
  );
}

export default App;

