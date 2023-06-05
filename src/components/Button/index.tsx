import React from 'react';
import { Container } from './styles';

interface Props {
    text: string;
    onClick: () => void;
	color?: string;
	isDisabled?: boolean;
}

const Button: React.FC<Props> = ({ text, onClick, color, isDisabled = false }) => (
	<Container onClick={onClick} color={color} disabled={isDisabled}>
		{text}
	</Container>
);


export default Button;
