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

    it('Aparição de modal', async () => {    
        const user = userEvent.setup()
        const newPaintingButton = screen.getByText('Iniciar Pintura')
    
        await user.click(newPaintingButton)
        const labelElement = screen.getByText('Preparando robô');
        expect(labelElement).toBeTruthy();
        
    });

})

