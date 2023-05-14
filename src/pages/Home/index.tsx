import React from 'react';
import { Container, ButtonsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';


const Home: React.FC= () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title title={'Robô Pintor'}/>
            <ButtonsContainer>
                <Button text={'Nova Pintura'} onClick={() => navigate('/new-painting')}/>
                <Button text={'Preferências'} onClick={() => navigate('/preferences')}/>
                <Button text={'Realizar Teste'} onClick={() => navigate('/test')}/>
            </ButtonsContainer>
        </Container>
    )
};


export default Home;
