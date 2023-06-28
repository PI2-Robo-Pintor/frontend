import { useContext, useState } from "react";

import {
  Container,
  SettingsContainer,
  Input,
  ButtonT,
  ButtonsContainer
} from "./styles";
import Button from "../Button";

import { mqttTopics, TypeEnum } from '../../settings/mqttSettings';
import { MqttContext } from '../../contexts/MqttContext';

const VelocityInput = () => {
  const [value, setValue] = useState(200);
  const { mqttPublish} = useContext(MqttContext);

  const handleChange: any = (value: number) => {
    if (value < 60) setValue(60);
    else setValue(value);
  }

  const setVelocity = () => {
    mqttPublish({
        topic: mqttTopics.general,
        message: {
            type: TypeEnum.velocity,
            value,
        }
    })
}

  return (
    <Container>
      <Input value={value} onChange={handleChange} />
      <ButtonsContainer>
        <SettingsContainer>
          <ButtonT onClick={() => handleChange(value + 10)}>+ 10</ButtonT>
          <ButtonT onClick={() => handleChange(value + 50)}>+ 50</ButtonT>
          <ButtonT onClick={() => handleChange(value + 100)}>+ 100</ButtonT>
        </SettingsContainer>
        <SettingsContainer>
          <ButtonT onClick={() => handleChange(value - 10)}>- 10</ButtonT>
          <ButtonT onClick={() => handleChange(value - 50)}>- 50</ButtonT>
          <ButtonT onClick={() => handleChange(value - 100)}>- 100</ButtonT>
        </SettingsContainer>
      </ButtonsContainer>
      <Button text="Enviar" onClick={() => setVelocity()} />
    </Container>
  )
}

export default VelocityInput;
