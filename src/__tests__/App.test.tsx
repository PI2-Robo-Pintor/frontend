import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste inicial', () => {
  test('Carrega aplicação', () => {
    render(<App />);
  });
});
