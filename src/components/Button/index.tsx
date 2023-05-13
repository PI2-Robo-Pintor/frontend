import React from 'react';
import { Container } from './styles';

interface Props {
    text: string;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => (
  <Container onClick={onClick}>
    {text}
  </Container>
);


export default Button;
