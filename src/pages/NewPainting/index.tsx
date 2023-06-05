import React, {useContext} from 'react';
import { Container, InputsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import HeightInput from '../../components/HeightInput';
import SelectComponent from '../../components/SelectComponent';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { PaintingType } from '../../customTypes/paintingType';


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

		navigate('/ongoing-painting');
	}

	return (
		<Container>
			<Title title={'Nova Pintura'}/>
			<InputsContainer>
				<HeightInput 
					data-testid={"max-height-input"}
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
					data-testid={"min-height-input"}
				/>
				<SelectComponent 
					label={'Tipo de pintura'} 
					paintOption={paintOption} 
					paintOptions={paintOptions} 
					onChangeValue={setPaintOption}
					data-testid={"paint-option-select"}
				/>
			</InputsContainer>
			<Button text={'Iniciar Pintura'} onClick={handlePainting} data-testid="start-painting-button"/>
		</Container>
	);
};


export default NewPainting;
