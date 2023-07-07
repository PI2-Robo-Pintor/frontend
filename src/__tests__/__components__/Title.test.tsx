import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../components/Title';

describe('Componente Title', () => {
  it('Renderiza corretamente o título', () => {
    const titleText = 'Meu Título';
    render(<Title title={titleText} />);

    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeTruthy();
  });
});
