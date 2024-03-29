import React, {useContext} from 'react';
import { Container, InputsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import HeightInput from '../../components/HeightInput';
import SelectComponent from '../../components/SelectComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { PaintingType } from '../../customTypes/paintingType';
import { MqttContext } from '../../contexts/MqttContext';
import { Device, OnOffEnum, PublishEnum, RelayData, RobotData, RobotDataType, mqttTopics } from '../../settings/mqttSettings';
import { PublishData } from '../../settings/mqttSettings';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { statusDialog } from '../../utils/dialogs';
import { MAX_HEIGHT, MIN_HEIGHT } from '../../constants';


const NewPainting: React.FC= () => {
	const { 
		maxHeight,
		setMaxHeight,
		minHeight,
		setMinHeight,
		paintOption,
		setPaintOption,
		paintOptions
	} = useContext(UserContext);

    const navigate = useNavigate();

	const {mqttPublish,mqttSubscribe} = useContext(MqttContext);

	const startPainting = () => {
		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: PublishEnum.ON_OFF,
				value: OnOffEnum.On
			}
		})

		navigate('/ongoing-painting');
	}

	const openModal = () => {
		statusDialog({
			title: 'Preparando robô',
			handleFunction: startPainting
		})

		const result: SweetAlertResult =
		{
			isConfirmed: true,
			isDenied: false,
			isDismissed: false,
			value: true
		}

		mqttSubscribe({
			topic: mqttTopics.data,
			device: Device.ROBOT_DATA,
			callback: (params) => {
				const data: RobotData = params;

				if(data.type === RobotDataType.RDT_READY){
					Swal.close(result)
				}
			}
		});
	}

	const handleClick = () => {
		const paintingInfo: PaintingType = {
			maxHeight,
			minHeight,
			paintOption
		};

		let paintingInfos: Array<PaintingType> = JSON.parse(localStorage.getItem('paintingInfos') || '[]');

		paintingInfos.push(paintingInfo);

		if(paintingInfos.length > 3) {
			paintingInfos.shift()
		}

		localStorage.setItem('paintingInfos',JSON.stringify(paintingInfos));

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: PublishEnum.MAX_HEIGHT,
				value: maxHeight > MAX_HEIGHT ? MAX_HEIGHT : maxHeight
			}
		})

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: PublishEnum.MIN_HEIGHT,
				value: minHeight < MIN_HEIGHT ? MIN_HEIGHT : minHeight
			}
		})

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: PublishEnum.CONFIRM_HEIGHT,
				value: 1
			}
		})

		openModal();

	}

	const isDisabled = () => minHeight >= maxHeight;

	return (
		<Container>
			<Title title={'Nova Pintura'}/>
			<InputsContainer>
				<HeightInput 
					label={'Altura máxima'} 
					value={maxHeight} 
					onChangeValue={setMaxHeight} 
					typeHeight={'max-height'}
				/>
				<HeightInput 
					label={'Altura mínima'} 
					value={minHeight} 
					onChangeValue={setMinHeight}
					typeHeight={'min-height'}
				/>
				<SelectComponent 
					label={'Tipo de pintura'} 
					paintOption={paintOption} 
					paintOptions={paintOptions} 
					onChangeValue={setPaintOption}
				/>
			</InputsContainer>
			<Button isDisabled={isDisabled()} text={'Iniciar Pintura'} onClick={handleClick}/>
		</Container>
	);
};


export default NewPainting;
