import React, {useContext} from 'react';
import { Container, InfoContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import InfoComponent from '../../components/InfoComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { optionDialog } from '../../utils/dialogs';
import { MqttContext } from '../../contexts/MqttContext';
import { mqttTopics, OnOffEnum, TypeEnum } from '../../settings/mqttSettings';


const OngoingPainting: React.FC= () => {
	const { 
		maxHeight,
		minHeight,
		paintOption,
	} = useContext(UserContext);

    const navigate = useNavigate();

	const {mqttPublish} = useContext(MqttContext);

	const stopPainting = () => {
		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: TypeEnum.on_off,
				value: OnOffEnum.off
			}
		});

		navigate('/new-painting');
	}

	const handleButton = () => {
		optionDialog({
			title: 'Deseja parar a pintura?',
			handleFunction: stopPainting
		})
	}

	return (
		<Container>
			<Title title={'Pintura em andamento'}/>
			<InfoContainer>
				<InfoComponent label={'Altura máxima'} value={maxHeight}/>
				<InfoComponent label={'Altura mínima'} value={minHeight}/>
				<InfoComponent label={'Tipo de parede'} value={paintOption}/>
			</InfoContainer>
			<Button text={'Parar Pintura'} color={'red'} onClick={handleButton}/>
		</Container>
	);
};


export default OngoingPainting;
