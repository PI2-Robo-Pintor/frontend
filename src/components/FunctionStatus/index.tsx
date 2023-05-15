import React from "react";
import { Container, Label } from "./styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';

import Loading from "../Loading";
import defaultColors from "../../settings/defaultSettings";

interface Props {
  label: string;
  state: number;
}

const FunctionStatus: React.FC<Props> = ({ label, state }) => (
  <Container>
    <Label>{label}</Label>
    {state === 0 && <Loading color={defaultColors.primary} />}
    {state === 1 && <CheckCircleIcon style={{ color: defaultColors.green}} />}
    {state === 2 && <DangerousIcon style={{ color: defaultColors.error}} />}
  </Container>
)

export default FunctionStatus;
