import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Title = ({ title }) => (
  <Container>
    {title}
  </Container>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
