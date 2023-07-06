import React, { useContext, useState } from "react";
import { Container, Label } from "./styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';

import Loading from "../Loading";
import defaultColors from "../../settings/defaultSettings";
import { MqttContext } from "../../contexts/MqttContext";
import { Device, RobotData, RobotStatus, mqttTopics, robotDataTypeLabels } from "../../settings/mqttSettings";

interface Props {
  label: string;
  state: number;
}

const FunctionStatus: React.FC<Props> = ({ label, state }) => {
	const {mqttSubscribe} = useContext(MqttContext);
	const [currentState, setCurrentState] = useState(state);


	mqttSubscribe({
		topic: mqttTopics.data,
		device: Device.ROBOT_DATA,
		callback: (params) => {
			const data: RobotData = params;
			const componentType = robotDataTypeLabels.find(item => label === item.label)?.type
			if(data.type === componentType){
				if(data.value === RobotStatus.SUCCESS){
					setCurrentState(data.value)
				} else {
					setCurrentState(1)
				}
			}
		}
	});

	return (
		<Container>
			<Label>{label}</Label>
			{currentState === 0 && <CheckCircleIcon style={{ color: defaultColors.green}} />}
			{currentState === 1 && <DangerousIcon style={{ color: defaultColors.error}} />}
			{currentState === 2 && <Loading color={defaultColors.primary} />}
		</Container>
	)
}
export default FunctionStatus;
