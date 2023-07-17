import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Componente Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('Renderiza titulo corretamente', () => {
    const mainTitleElement = screen.getByText('Robô Pintor');
    expect(mainTitleElement).toBeTruthy();
  });

  it('Navega para a pagina home quando clicar no titulo', () => {
    const mainTitleElement = screen.getByText('Robô Pintor');
    fireEvent.click(mainTitleElement);
    expect(window.location.pathname).toBe('/');
  });

  it('Renderiza componente com a prop correta', () => {
    const connectionStatusElement = screen.getByTestId('LoadingIcon');
    expect(connectionStatusElement).toBeTruthy();
    expect(connectionStatusElement.getAttribute('isConnected')).toBeFalsy;
  });
});
