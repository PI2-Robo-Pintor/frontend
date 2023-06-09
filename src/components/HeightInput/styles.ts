import styled from 'styled-components';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';

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

export const InputBox = styled.input`
  min-width: 80px;
  width: 15vw;
  max-width: 100px;
  min-height: 25px;
  height: 5vh;
  max-height: 30px;

  color: ${defaultColors.primary};

  text-align: center;

  border: 2px solid ${defaultColors.primary};
  color: ${defaultColors.primary};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
  text-align: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-right: 2%;

  width: 10rem;
`;

export const ControlButton = styled(ControlCameraOutlinedIcon)`
  margin-left: 20px;
  cursor: pointer;
`;
