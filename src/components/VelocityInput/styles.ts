import styled from 'styled-components';

import Button from "../Button";

import defaultColors from '../../settings/defaultSettings';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid ${defaultColors.primary};
  border-radius: 6px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 20px;

  height: 40px;
  width: 90%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 15px;
`;

export const ButtonT = styled.div`
  background-color: ${defaultColors.primary};
  height: 20px;
  width: 50px;
  text-align: center;

  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;