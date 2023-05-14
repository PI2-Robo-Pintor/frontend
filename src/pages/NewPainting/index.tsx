import React from 'react';
import { Container, InputsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';


const NewPainting: React.FC= () => (
	<Container>
        <Title title={'Nova Pintura'}/>
        <Button text={'Iniciar Pintura'} onClick={()=> console.log('teste')}/>
	</Container>
);


export default NewPainting;
