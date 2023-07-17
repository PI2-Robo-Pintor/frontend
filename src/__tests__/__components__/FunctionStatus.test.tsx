import { render, screen } from '@testing-library/react';
import FunctionStatus from '../../components/FunctionStatus';
import { MqttProvider } from '../../contexts/MqttContext';

describe('Componente FunctionStatus', () => {
  const label = 'Test Label';
  it('Renderiza Label correta', () => {
    render(<MqttProvider><FunctionStatus label={label} state={0} /></MqttProvider>);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeTruthy();
    expect(labelElement.textContent).toBe(label);
  });

  it('Renderiza icone de loading(estado 0)', () => {
    render(<MqttProvider><FunctionStatus label={label} state={2} /></MqttProvider>);
    const loadingElement = screen.getByTestId('LoadingIcon');
    expect(loadingElement).toBeTruthy();
  });

  it('Renderiza icone de Ok(estado 0)', () => {
    render(<MqttProvider><FunctionStatus label={label} state={0} /></MqttProvider>);
    const checkCircleIcon = screen.getByTestId('CheckCircleIcon');
    expect(checkCircleIcon).toBeTruthy();
  });

  it('Renderiza icone de erro(estado 0)', () => {
    render(<MqttProvider><FunctionStatus label={label} state={1} /></MqttProvider>);
    const dangerousIcon = screen.getByTestId('DangerousIcon');
    expect(dangerousIcon).toBeTruthy();
  });
});
