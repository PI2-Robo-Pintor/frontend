import styled from "styled-components";
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1;
  align-items: self-end;
  margin-right: 10px;
`;

export const Status = styled.div`
  font-size: 12px;
`;

export const ConnectedIcon = styled(WifiOutlinedIcon)`
  margin-right: 17px;
  width: 50px;
  height: 50px;
`;
