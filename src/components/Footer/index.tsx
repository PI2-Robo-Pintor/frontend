import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import HomeIcon from '@mui/icons-material/Home';

import { FooterContainer, IconContainer } from "./styles";
import { getButtonColor } from "../../utils/colorUtils";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const path = window.location.pathname;
  const isHomePage = path === '/';
  const isPaintingPage = path === '/new-painting';
  const isPreferencesPage = path === '/preferences';
  const isTestingPage = path === '/test';

  const navigate = useNavigate();

  return (
    <FooterContainer>
      <IconContainer isactive={isHomePage ? 1 : 0} onClick={() => navigate('/')}>
        <HomeIcon color={getButtonColor(isHomePage)}/>
        {'Home'}
      </IconContainer>
      <IconContainer isactive={isPaintingPage ? 1 : 0} onClick={() => navigate('/new-painting')}>
        <ImagesearchRollerIcon color={getButtonColor(isPaintingPage)}/>
        {'Pintura'}
      </IconContainer>
      <IconContainer isactive={isTestingPage ? 1 : 0} onClick={() => navigate('/test')}>
        <InventoryOutlinedIcon color={getButtonColor(isTestingPage)}/>
        {'Teste'}
      </IconContainer>
      <IconContainer isactive={isPreferencesPage ? 1 : 0} onClick={() => navigate('/preferences')}>
        <ListAltIcon  color={getButtonColor(isPreferencesPage)}/>
        {'Preferências'}
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
