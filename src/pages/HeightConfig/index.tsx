import React, { useContext } from 'react';
import { Container, ButtonsContainer, ArrowButton, Label, ContentContainer } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import arrowUp from '../../assets/images/arrowUp.svg'
import arrowDown from '../../assets/images/arrowDown.svg'
import {MAX_HEIGHT, MIN_HEIGHT} from '../../constants';


const HeightConfig: React.FC= () => {
    const { 
		maxHeight,
		setMaxHeight,
		minHeight,
		setMinHeight
	} = useContext(UserContext);

    const navigate = useNavigate();

    const {typeHeight} = useParams();

    const title = typeHeight === 'max-height' ? 'Altura Máxima' : 'Altura Mínima';
    const value = typeHeight === 'max-height' ? maxHeight : minHeight;
    const handleChange = typeHeight === 'max-height' ? setMaxHeight : setMinHeight;

    const increaseHeight = () => {
        if(value < MAX_HEIGHT) {
            if(typeHeight === 'max-height' || minHeight < maxHeight) {
                handleChange(value + 1);
            } 

        }
    }

    const decreaseHeight = () => {
        if(value > MIN_HEIGHT) {
            if(typeHeight === 'min-height' || minHeight < maxHeight) {
                handleChange(value - 1);
            }
        }
    }

    return (
        <Container>
            <Title title={title}/>
            <ContentContainer>
                <Label>{value}  {'cm'}</Label>
                <ButtonsContainer>
                    <ArrowButton onClick={increaseHeight}>
                        <img src={arrowUp} alt="arrowUp" />
                    </ArrowButton>
                    <ArrowButton onClick={decreaseHeight}>
                        <img src={arrowDown} alt="arrowDown" />
                    </ArrowButton>
                </ButtonsContainer>
            </ContentContainer>
            <Button text={'Salvar'} onClick={() => navigate('/new-painting')}/>
        </Container>
    )
};


export default HeightConfig;
