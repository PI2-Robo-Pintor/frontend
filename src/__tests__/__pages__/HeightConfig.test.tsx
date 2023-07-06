import { expect, beforeEach, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeightConfig from '../../pages/HeightConfig';

describe('Teste da tela de configurar altura', () => {

    it('teste rota', async () => {
        const user = userEvent.setup();
        render(<HeightConfig />,{wrapper: BrowserRouter});

        const saveButton = screen.getByText('Salvar')
        expect(saveButton).toBeTruthy();

        await user.click(saveButton);

        expect(window.location.pathname).toBe('/new-painting');

    });

})

