import { Container, RobotPainting, MainTitle } from "./styles";
import ConnectionStatus from "../ConnectionStatus";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <RobotPainting />
      <MainTitle onClick={() => navigate('/')}>{'Robô Pintor'}</MainTitle>
      <ConnectionStatus isConnected={false} />
    </Container>
  )
}

export default Header;
