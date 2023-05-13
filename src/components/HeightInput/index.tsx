import React from "react";

import {
  Container,
  Label,
  Input,
  ControlButton
} from "./styles";

interface Props {
  label: string;
  value: number;
  onChangeValue: (value: number) => void;
}

const HeightInput: React.FC<Props> = ({ label, value, onChangeValue }) => (
  <Container>
    <Label>{label}</Label>
    <Input
      type="text"
      value={value}
      placeholder="cm"
      onChange={(e) => onChangeValue(Number(e.target.value))}
    />
    <ControlButton onClick={() => console.log('123')}/>
  </Container>
);

export default HeightInput;
