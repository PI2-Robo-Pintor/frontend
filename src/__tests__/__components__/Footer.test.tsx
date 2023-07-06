import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Footer from '../../components/Footer';
import App from '../../App';

describe('Componente de Footer', () => {
  // beforeEach(() => {
  //   render(
  //     <MemoryRouter>
  //       <Footer />
  //     </MemoryRouter>
  //   );
  // });

  it('Reinderiza corretamente os icones', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const homeIcon = screen.getByTestId('HomeIcon');
    const paintingIcon = screen.getByTestId('ImagesearchRollerIcon');
    const testIcon = screen.getByTestId('InventoryOutlinedIcon');
    const preferencesIcon = screen.getByTestId('ListAltIcon');

    expect(homeIcon).toBeTruthy();
    expect(paintingIcon).toBeTruthy();
    expect(testIcon).toBeTruthy();
    expect(preferencesIcon).toBeTruthy();
  });

  it('Navega corretamente para as paginas', async () => {

    render(<App />)

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
