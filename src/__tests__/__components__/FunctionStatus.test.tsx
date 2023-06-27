import { render, screen } from '@testing-library/react';
import FunctionStatus from '../../components/FunctionStatus';

describe('Componente FunctionStatus', () => {
  const label = 'Test Label';
  it('Renderiza Label correta', () => {
    render(<FunctionStatus label={label} state={0} />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toBe(label);
  });

  it('Renderiza icone de loading(estado 0)', () => {
    render(<FunctionStatus label={label} state={0} />);
    const loadingElement = screen.getByLabelText('function-status-label');
    expect(loadingElement).toBeTruthy();
  });

  it('Renderiza icone de Ok(estado 0)', () => {
    render(<FunctionStatus label={label} state={1} />);
    const checkCircleIcon = screen.getByLabelText('check-circle');
    expect(checkCircleIcon).toBeTruthy();
  });

  it('Renderiza icone de erro(estado 0)', () => {
    render(<FunctionStatus label={label} state={2} />);
    const dangerousIcon = screen.getByLabelText('dangerous');
    expect(dangerousIcon).toBeTruthy();
  });
});
