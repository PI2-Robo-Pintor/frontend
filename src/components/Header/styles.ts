import { styled } from "styled-components";

import { HeaderPainting } from "../../assets/images/headerPainting";
import defaultColors from "../../settings/defaultSettings";

export const Container = styled.header`
  position: fixed;
  display: flex;
  height: 7vh;
  min-height: 50px;
  width: 100%;
  top: 0;
  background: linear-gradient(90deg, rgba(241, 241, 241, 0) 16%, ${defaultColors.primary} 18.5%);

  box-shadow: 0px 2px 4px 0px #00000040;
`;

export const RobotPainting = styled(HeaderPainting)`
  height: 100%;
  width: 90px;
  flex: 1;
`;

export const MainTitle = styled.div`
  align-self: center;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  text-align-last: center;
  color: ${defaultColors.white};

  @media (max-width: 390px) {
    font-size: 19px;
  }
`;
