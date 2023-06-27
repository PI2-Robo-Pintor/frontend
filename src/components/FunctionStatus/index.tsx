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
   <Label aria-label="function-status-label">{label}</Label>
    {state === 0 && <Loading aria-label="loading" color={defaultColors.primary} />}
    {state === 1 && <CheckCircleIcon aria-label="check-circle" style={{ color: defaultColors.green}} />}
    {state === 2 && <DangerousIcon aria-label="dangerous" style={{ color: defaultColors.error}} />}
  </Container>
)

export default FunctionStatus;
