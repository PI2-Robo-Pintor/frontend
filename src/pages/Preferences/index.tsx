import React, { useEffect, useState } from 'react';
import { ButtonsContainer, Container } from './styles';
import Title from '../../components/Title';
import PreferenceButton from '../../components/PreferenceButton';
import { PaintingType } from '../../customTypes/paintingType';


const Preferences: React.FC= () => {
	const [paintingInfos, setPaintingInfos] = useState<Array<PaintingType>>([])

	useEffect(() => {
		setPaintingInfos(JSON.parse(localStorage.getItem('paintingInfos') || '[]'));
	},[])

	return (
		<Container>
			<>
				<Title title={'Preferências'}/>
				<ButtonsContainer>
					{paintingInfos.map((info, index)=>
						<PreferenceButton 
							paintOption={info.paintOption}
							maxHeight={info.maxHeight}
							minHeight={info.minHeight}	
							key={index}
						/>
					)}
				</ButtonsContainer>
			</>
		</Container>
	);
};


export default Preferences;
