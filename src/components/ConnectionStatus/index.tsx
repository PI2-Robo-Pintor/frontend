import { Container, Status, ConnectedIcon } from './styles';

interface Props {
  isConnected: boolean;
}

const ConnectionStatus: React.FC<Props> = ({ isConnected }) => {
  return (
    <Container>
      <ConnectedIcon />
      <Status>
        { isConnected ? 'Conectado' : 'Conectando...' }
      </Status>
    </Container>
  )
}

export default ConnectionStatus;
