import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MAX_HEIGHT, MIN_HEIGHT } from "../../constants";
import { UserContext } from "../../contexts/UserContext";

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

  const {
		maxHeight,
		minHeight,
	} = useContext(UserContext);

  return(
    <Container>
      <Label htmlFor="height-input">{label}</Label>
      <InputBox
        id="height-input"
        value={value}
        maxLength={3}
        onChange={(e: any) => onChangeValue(+e.target.value)}
        type="number"
        min={MIN_HEIGHT}
        max={MAX_HEIGHT}

      />
      <ControlButton onClick={() => navigate(`/new-painting/${typeHeight}`)}/>
    </Container>

  )
};

export default HeightInput;


