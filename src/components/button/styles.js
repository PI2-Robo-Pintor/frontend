import styled from 'styled-components'

import defaultColors from '../../settings/defaultSettings'

export const Container = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  background-color: ${defaultColors.primary};

  justify-content: center;

  padding: 15px 24px;
  border-radius: 10px;
  cursor: pointer;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`
