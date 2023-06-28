import { render, screen } from '@testing-library/react';
import HeightInput from '../../components/InfoComponent';

describe('Componente HeightInput', () => {
  it('Renderiza label correta', () => {
    const label = 'Teste';
    const value = 50;
    render(<HeightInput label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(`${value} cm`);

    expect(labelElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });

  it('Renderiza só a label quando valor não é fornecido', () => {
    const label = 'Teste';
    const value = null;
    render(<HeightInput label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.queryByText(' cm');

    expect(labelElement).toBeTruthy();
    expect(valueElement).toBeNull();
  });
});
