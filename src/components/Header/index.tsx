import { Container, RobotPainting, MainTitle } from "./styles";
import ConnectionStatus from "../ConnectionStatus";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MqttContext } from "../../contexts/MqttContext";

const Header = () => {
  const navigate = useNavigate();
  const {isConnected} = useContext(MqttContext);

  return (
    <Container>
      <RobotPainting />
      <MainTitle onClick={() => navigate('/')}>{'Robô Pintor'}</MainTitle>
      <ConnectionStatus isConnected={isConnected} />
    </Container>
  )
}

export default Header;
