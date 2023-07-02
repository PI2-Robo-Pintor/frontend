import React, {useContext, useEffect, useState} from 'react';
import { Container, InfoContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import InfoComponent from '../../components/InfoComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { optionDialog } from '../../utils/dialogs';
import { MqttContext } from '../../contexts/MqttContext';
import { PressureData, StepMotorData, StepMotorDataType, mqttTopics } from '../../settings/mqttSettings';


const OngoingPainting: React.FC= () => {
	const { 
		maxHeight,
		minHeight,
		paintOption,
	} = useContext(UserContext);

    const [currentPosition, setCurrentPosition] = useState<number>(minHeight);
    const [pressure, setPressure] = useState<number>(0);



    const {mqttSubscribe} = useContext(MqttContext)

	const navigate = useNavigate();

	useEffect(() => {
        mqttSubscribe({
            topic: mqttTopics.data,
            callback: (params) => {
                const data: StepMotorData = params;
				if(data.type === StepMotorDataType.SMDT_POSITION){
					setCurrentPosition(data.value);
				}
            }
        });

		// mqttSubscribe({
        //     topic: mqttTopics.data,
        //     callback: (params) => {
        //         const data: PressureData = params;
		// 			setPressure(data.value);
				
        //     }
        // });
    }, [])


	const {mqttPublish} = useContext(MqttContext);

	const stopPainting = () => {
		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: 1,
				value: 1
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
				{/* <InfoComponent label={'Tipo de parede'} value={paintOption}/> */}
				<InfoComponent label={'Altura atual'} value={currentPosition}/>

			</InfoContainer>
			<Button text={'Parar Pintura'} color={'red'} onClick={handleButton}/>
		</Container>
	);
};


export default OngoingPainting;
