import React from 'react';
import { Container, ButtonsContainer } from './styles';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


const Home: React.FC= () => {
    const navigate = useNavigate();

    return (
        <Container>
            <ButtonsContainer>
                <Button text={'Nova Pintura'} onClick={() => navigate('/new-painting')}/>
                <Button text={'Preferências'} onClick={() => navigate('/preferences')}/>
                <Button text={'Realizar Teste'} onClick={() => navigate('/test')}/>
            </ButtonsContainer>
        </Container>
    )
};


export default Home;
