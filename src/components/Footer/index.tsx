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
      <IconContainer data-testid ="home-icon" isActive={isHomePage} onClick={() => navigate('/')}>
        <HomeIcon color={getButtonColor(isHomePage)}/>
        {'Home'}
      </IconContainer>
      <IconContainer data-testid ="painting-icon" isActive={isPaintingPage} onClick={() => navigate('/new-painting')}>
        <ImagesearchRollerIcon color={getButtonColor(isPaintingPage)}/>
        {'Pintura'}
      </IconContainer>
      <IconContainer data-testid ="test-icon" isActive={isTestingPage} onClick={() => navigate('/test')}>
        <InventoryOutlinedIcon color={getButtonColor(isTestingPage)}/>
        {'Teste'}
      </IconContainer>
      <IconContainer data-testid ="preferences-icon" isActive={isPreferencesPage} onClick={() => navigate('/preferences')}>
        <ListAltIcon  color={getButtonColor(isPreferencesPage)}/>
        {'Preferências'}
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
