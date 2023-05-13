import styled from 'styled-components';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';

import defaultColors from '../../settings/defaultSettings';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;

    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 25vw;
    min-width: 270px;

    margin-bottom: 1vh;

    font-family: 'Roboto';
    color: ${defaultColors.primary};
`;


export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

export const Hr = styled.hr`
    background-color: ${defaultColors.primary};
    border: none;
    height: 1px;
    width: 100%;
`;

