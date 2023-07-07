import { expect, beforeEach, describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../../pages/Home';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Teste da tela Home', () => {
    beforeEach(() => {
        render(<Home />, {wrapper: BrowserRouter})    
    });

    it('Navegação para tela de nova pintura', async () => {        
        const user = userEvent.setup()
        const newPaintingButton = screen.getByText('Nova Pintura')
    
        await user.click(newPaintingButton)
        expect(window.location.pathname).toBe('/new-painting');
    });

    it('Navegação para tela de preferências', async () => {        
        const user = userEvent.setup()
        const newPaintingButton = screen.getByText('Preferências')
    
        await user.click(newPaintingButton)
        expect(window.location.pathname).toBe('/preferences');
    });

    it('Navegação para tela de testes', async () => {        
        const user = userEvent.setup()
        const newPaintingButton = screen.getByText('Realizar Teste')
    
        await user.click(newPaintingButton)
        expect(window.location.pathname).toBe('/test');
    });


})

