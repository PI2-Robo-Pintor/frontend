import React from 'react';
import { Container } from './styles';

interface Props {
    title: string;
}

const Title: React.FC<Props>= ({ title }) => (
  <Container>
    {title}
  </Container>
);

export default Title;
