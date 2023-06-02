import styled from 'styled-components';

import defaultColors from '../../settings/defaultSettings';

export const Container = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  background-color: ${props => props.color ? defaultColors.stop : defaultColors.primary};

  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;

  border-radius: 10px;
  cursor: pointer;

  width: 15vw;
  min-width: 150px;

  color: ${defaultColors.white};

  outline: none;
  border: none;

  &:disabled {
    cursor: auto;
    opacity: 0.6;
  }

  // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
