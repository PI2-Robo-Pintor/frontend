import { expect, beforeEach, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from '../../components/Button';

describe('Teste do componente Button', () => {
  beforeEach(() => {
    render(<Button text={'Botão Teste'} onClick={() => console.log("Botão teste") } />);
  });

  it('Verifica se o texto do botão foi renderizado', () => {
    expect(screen.getByText('Botão Teste')).toBeTruthy();
  });

  it('Verifica se interação com o botão funciona', () => {
    let consoleOutput = '';

    const originalLog = console.log;
    console.log = (...args) => {
      consoleOutput += args.join(' ');
      originalLog(...args);
    };

    const button = screen.getByText('Botão Teste');

    expect(consoleOutput).toBe('');

    button.click();

    expect(consoleOutput).toBe('Botão teste');

    console.log = originalLog;
  });
});
