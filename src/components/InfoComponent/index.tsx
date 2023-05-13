import React from "react";

import {
  Container,
  Label,
  Hr,
  Row
} from "./styles";

interface Props {
  label: string;
  value: number | string;
}

const HeightInput: React.FC<Props> = ({ label, value }) => (
  <Container>
    <Row>
        <Label>{label}</Label>
        <Label>{value} {(typeof value) === 'number' ? 'cm' : ''}</Label>

    </Row>
    <Hr />
  </Container>
);

export default HeightInput;
