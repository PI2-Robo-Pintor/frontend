import { Container, Status, ConnectedIcon, StatusContainer } from './styles';
import Loading from '../Loading';
import defaultColors from '../../settings/defaultSettings';

interface Props {
  isConnected: boolean;
}

const ConnectionStatus: React.FC<Props> = ({ isConnected }) => {
  return (
    <Container>
      <StatusContainer>
        {
          isConnected
            ? <ConnectedIcon />
            : <Loading color={defaultColors.black} />
        }
        <Status>
          { isConnected ? 'Conectado' : 'Conectando...' }
        </Status>
      </StatusContainer>
    </Container>
  )
}

export default ConnectionStatus;
