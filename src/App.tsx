import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';
import HeightInput from './components/HeightInput';
import SelectComponent from './components/SelectComponent';
import { SelectType } from './customTypes/selectTypes';
import paintOptions from './utils/paintOptions';


function App() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const [paintOption, setPaintOption] = useState(paintOptions[0].value);

  useEffect(() => {
    console.log(maxHeight);
    console.log(minHeight);
    console.log(paintOption)
  }, [maxHeight, minHeight, paintOption])

  return (
    <div >
      
      <Button text="Altura máxima" onClick={() => console.log("123")} />
      <Title title="Altura máxima" />
      <HeightInput label={'Altura máxima'} value={maxHeight} onChangeValue={setMaxHeight}/>
      <HeightInput label={'Altura mínima'} value={minHeight} onChangeValue={setMinHeight}/>
      <SelectComponent label={'Tipo de pintura'} paintOption={paintOption} paintOptions={paintOptions} onChangeValue={setPaintOption}/>
    </div>
  );
}

export default App;

