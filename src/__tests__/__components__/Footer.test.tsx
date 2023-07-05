import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
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

    expect(homeIcon).toBeInTheDocument();
    expect(paintingIcon).toBeInTheDocument();
    expect(testIcon).toBeInTheDocument();
    expect(preferencesIcon).toBeInTheDocument();
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
