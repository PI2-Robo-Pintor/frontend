import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../../components/Footer';

describe('Componente de Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('Reinderiza corretamente os icones', () => {
    const homeIcon = screen.getByTestId('HomeIcon');
    const paintingIcon = screen.getByTestId('ImagesearchRollerIcon');
    const testIcon = screen.getByTestId('InventoryOutlinedIcon');
    const preferencesIcon = screen.getByTestId('ListAltIcon');

    expect(homeIcon).toBeInTheDocument();
    expect(paintingIcon).toBeInTheDocument();
    expect(testIcon).toBeInTheDocument();
    expect(preferencesIcon).toBeInTheDocument();
  });

  it.skip('Navega corretamente para as paginas', () => {
    const homeIcon = screen.getByTestId('HomeIcon');
    const paintingIcon = screen.getByTestId('ImagesearchRollerIcon');
    const testIcon = screen.getByTestId('InventoryOutlinedIcon');
    const preferencesIcon = screen.getByTestId('ListAltIcon');

    fireEvent.click(homeIcon);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(paintingIcon);
    expect(window.location.pathname).toBe('/new-painting');

    fireEvent.click(testIcon);
    expect(window.location.pathname).toBe('/test');

    fireEvent.click(preferencesIcon);
    expect(window.location.pathname).toBe('/preferences');
  });
});
