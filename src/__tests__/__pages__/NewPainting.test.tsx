import { expect, beforeEach, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NewPainting from '../../pages/NewPainting';
import { UserProvider } from '../../contexts/UserContext';
import { MqttProvider } from '../../contexts/MqttContext';

describe('Teste da tela Nova Pintura', () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <MqttProvider>
                    <NewPainting />
                </MqttProvider>
            </UserProvider>, 
            {wrapper: BrowserRouter}
        ) 
    });

    it('Aparição de componentes', async () => {    
        const maxHeight = screen.getByText('Altura máxima');
        expect(maxHeight).toBeTruthy();
    
        const minHeight = screen.getByText('Altura mínima');
        expect(minHeight).toBeTruthy();

        const heightButtons = screen.getAllByTestId('ControlCameraOutlinedIcon');
        expect(heightButtons.length).toBe(2);

        const newPaintingButton = screen.getByText('Iniciar Pintura');
        expect(newPaintingButton).toBeTruthy();

    });

    it('Navegação para tela de configuração de altura máxima', async () => {
        const user = userEvent.setup();

        const heightButtons = screen.getAllByTestId('ControlCameraOutlinedIcon');

        await user.click(heightButtons[0]);
        expect(window.location.pathname).toBe('/new-painting/max-height');
    });

    it('Navegação para tela de configuração de altura mínima', async () => {
        const user = userEvent.setup();

        const heightButtons = screen.getAllByTestId('ControlCameraOutlinedIcon');

        await user.click(heightButtons[1]);
        expect(window.location.pathname).toBe('/new-painting/min-height');
    });

    it('Aparição de modal', async () => {    
        const user = userEvent.setup()
        const newPaintingButton = screen.getByText('Iniciar Pintura')
    
        await user.click(newPaintingButton)
        const labelElement = screen.getByText('Preparando robô');
        expect(labelElement).toBeTruthy();
        
    });

})

