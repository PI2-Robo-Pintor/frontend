import React, { useContext, useEffect, useState } from 'react';
import { Container, StatusContainer, ButtonContainer } from './styles';
import Title from '../../components/Title';
import FunctionStatus from '../../components/FunctionStatus';
import Button from '../../components/Button';
import { MqttContext } from '../../contexts/MqttContext';
import { PublishEnum, mqttTopics } from '../../settings/mqttSettings';


const PaintTest: React.FC= () => {
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	const {mqttPublish} = useContext(MqttContext);


	useEffect(() => {
        if(isButtonClicked){
			mqttPublish({
				topic: mqttTopics.general,
				message: {
					type: PublishEnum.TEST,
					value: 1
				}
			})
		}
    }, [isButtonClicked])

	const handleButton = () => {
		setIsButtonClicked(!isButtonClicked);
	}

	return (
		<Container>
			<Title title={'Teste de componentes'}/>
            {isButtonClicked 
				? 
				<StatusContainer>
					<FunctionStatus label={'Conexão'} state={2}/>
					<FunctionStatus label={'Compressor'} state={2}/>
					<FunctionStatus label={'Motor'} state={2}/>
					<FunctionStatus label={'Válvula'} state={2}/>
				</StatusContainer>
				: 
				<ButtonContainer>
					<Button text={'Realizar testes'} onClick={handleButton}/>
				</ButtonContainer>
			}

		</Container>
	);
};


export default PaintTest;
