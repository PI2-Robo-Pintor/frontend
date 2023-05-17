import styled from 'styled-components';

import defaultColors from '../../settings/defaultSettings';

export const Container = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  background-color: ${defaultColors.primary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;

  text-align: center;

  border-radius: 10px;
  cursor: pointer;

  width: 15vw;
  min-width: 190px;

  color: ${defaultColors.white};

  cursor: pointer;

`;


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 90%;

`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
`;