import React, {useContext} from 'react';
import { Container, InputsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import HeightInput from '../../components/HeightInput';
import SelectComponent from '../../components/SelectComponent';
import { UserContext } from '../../contexts/UserContext';


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

	return (
		<Container>
			<Title title={'Nova Pintura'}/>
			<InputsContainer>
				<HeightInput label={'Altura máxima'} value={maxHeight} onChangeValue={setMaxHeight}/>
				<HeightInput label={'Altura mínima'} value={minHeight} onChangeValue={setMinHeight}/>
				<SelectComponent 
					label={'Tipo de pintura'} 
					paintOption={paintOption} 
					paintOptions={paintOptions} 
					onChangeValue={setPaintOption}
				/>
			</InputsContainer>
				<Button text={'Iniciar Pintura'} onClick={()=> console.log('teste')}/>
		</Container>
	);
};


export default NewPainting;
