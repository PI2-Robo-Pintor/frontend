import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ text, onClick }) => (
  <Container onClick={onClick}>
    {text}
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
