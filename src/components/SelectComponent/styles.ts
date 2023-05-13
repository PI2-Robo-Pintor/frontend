import styled from 'styled-components';
import defaultColors from '../../settings/defaultSettings';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom: 1vh;

  font-family: 'Roboto';
  color: ${defaultColors.primary};
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-right: 2%;

  width: 10rem;
`;

export const Select = styled.select`
  width: 15vw;
  max-width: 100px;
  min-width: 90px;
  height: 5vh;
  max-height: 30px;

  color: ${defaultColors.primary};
  background-color: ${defaultColors.white};

  text-align: center;

  border: 2px solid ${defaultColors.primary};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  cursor: pointer;
`;

