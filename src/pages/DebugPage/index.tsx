import React, { useContext } from 'react';
import { Container, ButtonsContainer, TestContainer } from './styles';
import Button from '../../components/Button';
import { MqttContext } from '../../contexts/MqttContext';

import { PublishEnum, mqttTopics } from '../../settings/mqttSettings';
import VelocityInput from '../../components/VelocityInput';

const Home: React.FC= () => {
    const { mqttPublish} = useContext(MqttContext);


    const testePre = (code: number) => {
        mqttPublish({
            topic: mqttTopics.general,
            message: {
                type: PublishEnum.ON_OFF,
                value: code,
            }
        })
    }

    const invert = () => {
        mqttPublish({
            topic: mqttTopics.general,
            message: {
                type: PublishEnum.INVERT,
                value: 0,
            }
        })
    }

    return (
        <Container>
            <ButtonsContainer>
                <TestContainer>
                    <Button text="Iniciar" onClick={() => testePre(1)}/>
                    <Button text="Parar" onClick={() => testePre(0)}/>
                    <Button text="Inverter" onClick={invert}/>
                </TestContainer>
                <VelocityInput />
            </ButtonsContainer>
        </Container>
    )
};


export default Home;