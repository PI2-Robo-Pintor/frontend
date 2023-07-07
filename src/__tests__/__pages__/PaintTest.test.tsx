import { expect, beforeEach, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../../contexts/UserContext';
import { MqttProvider } from '../../contexts/MqttContext';
import PaintTest from '../../pages/PaintTest';


describe('Teste da tela de Testes', () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <MqttProvider>
                    <PaintTest />
                </MqttProvider>
            </UserProvider>, 
            {wrapper: BrowserRouter}
        ) 
    });

    it('Clique no botão', async () => {    
        const user = userEvent.setup()
        const TestButton = screen.getByText('Realizar testes');
        expect(TestButton).toBeTruthy()
    
        await user.click(TestButton)
        const labelElement = screen.getByText('Compressor');
        expect(labelElement).toBeTruthy();
        
    });

})