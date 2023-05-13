import React from "react";

import {
  Container,
  Label,
  ControlButton,
  InputBox,
} from "./styles";

interface Props {
  label: string;
  value: number;
  onChangeValue: (value: number) => void
}

const HeightInput: React.FC<Props> = ({ label, value, onChangeValue }) => (
  <Container>
    <Label>{label}</Label>
    <InputBox
      value={value}
      maxLength={3}
      onChange={(e) => onChangeValue(+e.target.value)}
    />
    <ControlButton onClick={() => console.log('123')}/>
  </Container>
);

export default HeightInput;
