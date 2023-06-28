import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from '../../components/SelectComponent';

describe('Componente SelectComponent', () => {
  const paintOptions = [
    { label: 'Vermelho', value: 'Vermelho' },
    { label: 'Azul', value: 'Azul' },
    { label: 'Verde', value: 'Verde' },
  ];

  const onChangeValue = vi.fn();

  beforeEach(() => {
    render(
      <SelectComponent
        label="Label Teste"
        paintOption="Vermelho"
        paintOptions={paintOptions}
        onChangeValue={onChangeValue}
      />
    );
  });

  it('Renderiza label correta', () => {
    const labelElement = screen.getByText('Label Teste');
    expect(labelElement).toBeTruthy();
  });

  it('Renderiza as opções corretas', () => {
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeTruthy();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(3);

    expect(optionElements[0]).to.have.property('value', 'Vermelho');
    expect(optionElements[1]).to.have.property('value', 'Azul');
    expect(optionElements[2]).to.have.property('value', 'Verde');
  });

  it('Chama função quando a caixa de seleção for pressionada', () => {
    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'Azul' } });

    expect(onChangeValue).toHaveBeenCalledWith('Azul');
  });
});
