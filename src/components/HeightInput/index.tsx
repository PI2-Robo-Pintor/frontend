import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Label,
  ControlButton,
  InputBox,
} from "./styles";

interface Props {
  label: string;
  value: number;
  onChangeValue: (value: number) => void;
  typeHeight: string;
}

const HeightInput: React.FC<Props> = ({ label, value, onChangeValue, typeHeight }) => {
  const navigate = useNavigate();

  return(
    <Container>
      <Label>{label}</Label>
      <InputBox
        value={value}
        maxLength={3}
        onChange={(e) => onChangeValue(+e.target.value)}
      />
      <ControlButton onClick={() => navigate(`/new-painting/${typeHeight}`)}/>
    </Container>

  )
};

export default HeightInput;


