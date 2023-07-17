import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, useNavigate } from 'react-router-dom';
import HeightInput from '../../components/HeightInput';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { expect, describe, it } from 'vitest';
import HeightConfig from '../../pages/HeightConfig';



describe('Componente HeightInput', () => {
  it('Renderiza a label correta', () => {
    const label = 'Height';
    render(
      <MemoryRouter>
        <HeightInput label={label} value={0} onChangeValue={() => {}} typeHeight="cm" />
      </MemoryRouter>
    );

    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeTruthy();
  });

  it('Muda os valores corretamente', () => {
    let handleChangeValueValue;
    const handleChangeValue = (value: number) => {
      handleChangeValueValue = value;
    };

    render(
      <MemoryRouter>
        <HeightInput label="Height" value={0} onChangeValue={handleChangeValue} typeHeight="cm" />
      </MemoryRouter>
    );

    const inputElement = screen.getByLabelText('Height');
    fireEvent.change(inputElement, { target: { value: '50' } });

    expect(handleChangeValueValue).toBe(50);
  });

});
