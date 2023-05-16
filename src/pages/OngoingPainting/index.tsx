import React, {useContext} from 'react';
import { Container, InfoContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import InfoComponent from '../../components/InfoComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const OngoingPainting: React.FC= () => {
	const { 
		maxHeight,
		minHeight,
		paintOption,
	} = useContext(UserContext);

    const navigate = useNavigate();


	return (
		<Container>
			<Title title={'Pintura em andamento'}/>
			<InfoContainer>
				<InfoComponent label={'Altura máxima'} value={maxHeight}/>
				<InfoComponent label={'Altura mínima'} value={minHeight}/>
				<InfoComponent label={'Tipo de parede'} value={paintOption}/>
			</InfoContainer>
			<Button text={'Parar Pintura'} color={'red'} onClick={()=> navigate('/new-painting')}/>
		</Container>
	);
};


export default OngoingPainting;
