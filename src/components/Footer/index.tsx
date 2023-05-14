import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import { FooterContainer, IconContainer } from "./styles";
import { getButtonColor } from "../../utils/colorUtils";

const Footer = () => {
  const path = window.location.pathname;
  const isPaintingPage = path === '/paint';
  const isPreferencesPage = path === '/preference';
  const isTestingPage = path === '/test';

  const onClickPainting = () => console.log('Pintura')
  const onClickTesting = () => console.log('Teste')
  const onClickPreferences = () => console.log('Preferências')

  return (
    <FooterContainer>
      <IconContainer isActive={isPaintingPage} onClick={onClickPainting}>
        <ImagesearchRollerIcon color={getButtonColor(isPaintingPage)}/>
        {'Pintura'}
      </IconContainer>
      <IconContainer isActive={isTestingPage} onClick={onClickTesting}>
        <InventoryOutlinedIcon color={getButtonColor(isTestingPage)}/>
        {'Teste'}
      </IconContainer>
      <IconContainer isActive={isPreferencesPage} onClick={onClickPreferences}>
        <ListAltIcon  color={getButtonColor(isPreferencesPage)}/>
        {'Preferências'}
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
