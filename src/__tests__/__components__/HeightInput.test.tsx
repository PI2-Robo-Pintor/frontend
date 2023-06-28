import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import HeightInput from '../../components/HeightInput';


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

  it.skip('Navega para nova pintura quando o botão é pressionado', () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);

    render(
      <MemoryRouter>
        <HeightInput label="Height" value={0} onChangeValue={() => {}} typeHeight="cm" />
      </MemoryRouter>
    );

    const controlButton = screen.getByLabelText('Control Button');
    fireEvent.click(controlButton);

    expect(navigateMock).toHaveBeenCalledWith('/new-painting/cm');
  });
});
