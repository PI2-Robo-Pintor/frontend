import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library for additional matchers
import ConnectionStatus from '../../components/ConnectionStatus';

describe('Componente de ConnectionStatus', () => {
  it('Reinderiza componente com status verdadeiro', () => {
    render(<ConnectionStatus isConnected={true} />);

    const connectedIcon = screen.getByTestId('WifiOutlinedIcon');
    const statusText = screen.getByText('Conectado');

    expect(connectedIcon).toBeVisible(); // Use the appropriate assertion method for your testing framework
    expect(statusText).toBeVisible();
  });

  it('Reinderiza componente com status falso', () => {
    render(<ConnectionStatus isConnected={false} />);

    const loadingSpinner = screen.getByText('Conectando...');
    const statusText = screen.getByText('Conectando...');

    expect(loadingSpinner).toBeVisible(); // Use the appropriate assertion method for your testing framework
    expect(statusText).toBeVisible();
  });
});
