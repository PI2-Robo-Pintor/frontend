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
import { mqttTopics, OnOffEnum, TypeEnum } from '../../settings/mqttSettings';


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

	const {mqttPublish} = useContext(MqttContext);

	const handlePainting = () => {
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
				type: TypeEnum.max_height,
				value: maxHeight
			}
		})

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: TypeEnum.min_height,
				value: minHeight
			}
		})

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: TypeEnum.velocity,
				value: 23
			}
		})

		mqttPublish({
			topic: mqttTopics.general,
			message: {
				type: TypeEnum.on_off,
				value: OnOffEnum.on
			}
		})

		navigate('/ongoing-painting');
	}

	const isDisabled = () => minHeight > maxHeight;

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
			<Button isDisabled={isDisabled()} text={'Iniciar Pintura'} onClick={handlePainting}/>
		</Container>
	);
};


export default NewPainting;
