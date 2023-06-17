import React, { useContext } from 'react';
import { Container, ButtonsContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';
import { MqttContext } from '../../contexts/MqttContext';


const Home: React.FC= () => {
    const navigate = useNavigate();
    const {mqttSubscribe} = useContext(MqttContext)


    const teste = () => {
        mqttSubscribe({
            topic: 'pi2/painting'
        });
        navigate('/new-painting')
    }

    return (
        <Container>
            <ButtonsContainer>
                <Button text={'Nova Pintura'} onClick={teste}/>
                {/* <Button text={'Nova Pintura'} onClick={() => navigate('/new-painting')}/> */}
                <Button text={'Preferências'} onClick={() => navigate('/preferences')}/>
                <Button text={'Realizar Teste'} onClick={() => navigate('/test')}/>
            </ButtonsContainer>
        </Container>
    )
};


export default Home;
