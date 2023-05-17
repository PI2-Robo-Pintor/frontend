import styled from 'styled-components';
import defaultColors from '../../settings/defaultSettings';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 20vw;
  min-width: 200px;

  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 1vh;

  font-family: 'Roboto';
  color: ${defaultColors.primary};
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
