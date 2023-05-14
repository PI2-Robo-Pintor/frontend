import { Container, RobotPainting, MainTitle } from "./styles";
import ConnectionStatus from "../ConnectionStatus";

const Header = () => {
  return (
    <Container>
      <RobotPainting />
      <MainTitle>{'Robô Pintor'}</MainTitle>
      <ConnectionStatus isConnected={true} />
    </Container>
  )
}

export default Header;
