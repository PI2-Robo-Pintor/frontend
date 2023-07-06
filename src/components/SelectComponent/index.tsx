import React from 'react';
import { SelectType } from '../../customTypes/selectTypes';
import { Container, Label, Select } from './styles';

interface Props {
	label: string;
	paintOption: number;
    paintOptions: Array<SelectType>;
    onChangeValue: (value: number) => void;
}

const SelectComponent: React.FC<Props> = ({ label, paintOption, paintOptions, onChangeValue }) => {

  	return (
		<Container>
			<Label>{label}</Label>
			<Select value={paintOption} onChange={(e: any) => onChangeValue(parseInt(e.target.value))}>
				{paintOptions.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</Container>
  	)
};


export default SelectComponent;
