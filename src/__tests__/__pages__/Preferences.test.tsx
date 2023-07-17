import { expect, beforeEach, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../../contexts/UserContext';
import Preferences from '../../pages/Preferences';

describe('Teste da tela de Preferências', () => {
    beforeEach(() => {
        render(<UserProvider><Preferences /></UserProvider>, {wrapper: BrowserRouter})    
    });

    it.skip('Navegação para tela de pintura em andamento', async () => {    
        const user = userEvent.setup();
        const optionElements = screen.getAllByText('Altura máxima');
        expect(optionElements.length).toBe(3);

        // const stopButton = screen.getByText('Parar Pintura');

        // expect(stopButton).toBeTruthy();
    
        // await user.click(stopButton);
        // const confirmationButton = screen.getByText('Sim');

        // expect(confirmationButton).toBeTruthy();
        // await user.click(confirmationButton);

        // expect(window.location.pathname).toBe('/new-painting');
    });

})

