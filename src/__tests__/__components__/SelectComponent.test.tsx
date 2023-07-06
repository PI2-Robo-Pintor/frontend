import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from '../../components/SelectComponent';
import { SelectType } from '../../customTypes/selectTypes';

describe('Componente SelectComponent', () => {
  const paintOptions: SelectType[] = [
    { label: 'Vermelho', value: 200 },
    { label: 'Azul', value: 100 },
    { label: 'Verde', value: 50 },
  ];

  const onChangeValue = vi.fn();

  beforeEach(() => {
    render(
      <SelectComponent
        label="Label Teste"
        paintOption={200}
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

    expect(optionElements[0]).to.have.property('value', '200');
    expect(optionElements[1]).to.have.property('value', '100');
    expect(optionElements[2]).to.have.property('value', '50');
  });

  it('Chama função quando a caixa de seleção for pressionada', () => {
    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 100 } });

    expect(onChangeValue).toHaveBeenCalledWith(100);
  });
});
