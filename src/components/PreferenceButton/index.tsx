import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Container, Label, Row, } from './styles';
import paintOptions from '../../utils/paintOptions';

interface Props {
    paintOption: number;
    maxHeight: number;
    minHeight: number;
}

const PreferenceButton: React.FC<Props> = ({maxHeight, minHeight, paintOption}) => {
    const { 
		setMaxHeight,
		setMinHeight,
		setPaintOption,
	} = useContext(UserContext);

    const paintLabel = paintOptions.find(item => item.value === paintOption)?.label;

    const navigate = useNavigate();

    const handlePreference = () => {
        setMaxHeight(maxHeight);
        setMinHeight(minHeight);
        setPaintOption(paintOption);

        navigate('/new-painting');
    }

    return (
        <Container onClick={handlePreference}>
            <Row>
                <Label>{'Altura máxima:'}</Label>
                <Label>{maxHeight} {(typeof maxHeight) === 'number' ? 'cm' : ''}</Label>
            </Row>
            <Row>
                <Label>{'Altura mínima:'}</Label>
                <Label>{minHeight} {(typeof minHeight) === 'number' ? 'cm' : ''}</Label>
            </Row>
            <Row>
                <Label>{'Tipo de parede:'}</Label>
                <Label>{paintLabel}</Label>
            </Row>
        </Container>
    )
};


export default PreferenceButton;
