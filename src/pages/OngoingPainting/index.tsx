import React, {useContext, useEffect, useState} from 'react';
import { Container, InfoContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import InfoComponent from '../../components/InfoComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { optionDialog } from '../../utils/dialogs';
import { MqttContext } from '../../contexts/MqttContext';
import { PressureData, StepMotorData, StepMotorDataType, mqttTopics, Device, RelayData, PublishEnum, OnOffEnum, RobotData, RobotDataType } from '../../settings/mqttSettings';

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
			device: Device.ROBOT_DATA,
			callback: (params) => {
				const data: RobotData = params;

				if(data.type === RobotDataType.RDT_DONE){
					navigate('/new-painting');
				}
			}
		});

		mqttSubscribe({
			topic: mqttTopics.data,
			device: Device.D_STEP_MOTOR,
			callback: (params) => {
				const data: StepMotorData = params;
					if(data.type === StepMotorDataType.SMDT_POSITION){
						setCurrentPosition(data.value);
					}
				console.log('motor')
				console.log(data)
			}
		});

		mqttSubscribe({
			topic: mqttTopics.data,
			device: Device.D_PRESSURE,
			callback: (params) => {
				const data: PressureData = params;
				setPressure(data.value);
				console.log('pressure')
				console.log(data)
			}
		});

		mqttSubscribe({
			topic: mqttTopics.data,
			device: Device.D_RELAY,
			callback: (params) => {
				const data: RelayData = params;
				// setPressure(data.value);
				console.log('relay')
				console.log(data)
			}
		});
	}, [])


	const {mqttPublish} = useContext(MqttContext);

	const stopPainting = () => {
		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: PublishEnum.ON_OFF,
				value: OnOffEnum.OF
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
				{/* <InfoComponent label={'Pressão'} value={pressure}/> */}


			</InfoContainer>
			<Button text={'Parar Pintura'} color={'red'} onClick={handleButton}/>
		</Container>
	);
};


export default OngoingPainting;
