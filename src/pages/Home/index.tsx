import React, { useContext } from 'react';
import { Container, ButtonsContainer, TestContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';
import { MqttContext } from '../../contexts/MqttContext';

import { mqttTopics, TypeEnum } from '../../settings/mqttSettings';
import VelocityInput from '../../components/VelocityInput';

const Home: React.FC= () => {
    const navigate = useNavigate();
    const { mqttSubscribe, mqttPublish} = useContext(MqttContext);

    const teste = () => {
        mqttSubscribe({
            topic: 'pi2/painting',
            callback: (params) => {
                console.log(params.topic)
                console.log(params.json())
            }
        });
        navigate('/new-painting')
    }

    const testePre = (code: number) => {
        mqttPublish({
            topic: mqttTopics.general,
            message: {
                type: TypeEnum.on_off,
                value: code,
            }
        })
    }

    const invert = () => {
        mqttPublish({
            topic: mqttTopics.general,
            message: {
                type: TypeEnum.invert,
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
