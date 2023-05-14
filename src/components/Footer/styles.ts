import styled from 'styled-components';

import defaultColors from '../../settings/defaultSettings';
import { IconButton } from '@mui/material';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  background-color: ${defaultColors.white};

  height: 5vh;
  min-height: 35px;
  width: 100%;
  bottom: 0;
  padding: 10px 0;
  gap: 20vw;

  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
`;

interface IconProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const IconContainer: React.FC<IconProps> = styled(IconButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  gap: 2px;

  font-size: 12px !important;
  font-weight: 400;
  color: ${props => props.isActive ? defaultColors.black : defaultColors.gray};
`;
