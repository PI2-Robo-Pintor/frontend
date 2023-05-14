import { createGlobalStyle } from 'styled-components';

import defaultColors from './defaultSettings';


const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${defaultColors.background};
    font-family: 'Roboto';
  }

`

export default GlobalStyle;
