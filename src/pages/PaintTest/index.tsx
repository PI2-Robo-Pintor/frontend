import React from 'react';
import { Container, StatusContainer } from './styles';
import Title from '../../components/Title';
import FunctionStatus from '../../components/FunctionStatus';


const PaintTest: React.FC= () => (
	<Container>
        <Title title={'Teste de componentes'}/>
		<StatusContainer>
			<FunctionStatus label={'Acionamento'} state={0}/>
			<FunctionStatus label={'Conexão'} state={0}/>
			<FunctionStatus label={'Movimentação inicial'} state={0}/>
			<FunctionStatus label={'Gatilho'} state={0}/>
		</StatusContainer>
	</Container>
);


export default PaintTest;
