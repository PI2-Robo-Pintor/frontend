import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';
import HeightInput from './components/HeightInput';
import SelectComponent from './components/SelectComponent';
import paintOptions from './utils/paintOptions';
import InfoComponent from './components/InfoComponent';

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


    </div>
  );
}

export default App;

