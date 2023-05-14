import React from 'react';
import { Container } from './styles';

interface Props {
    text: string;
    onClick: () => void;
	color?: string;
}

const Button: React.FC<Props> = ({ text, onClick, color }) => (
	<Container onClick={onClick} color={color}>
		{text}
	</Container>
);


export default Button;
