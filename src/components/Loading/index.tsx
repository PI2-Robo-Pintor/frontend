import React from 'react';

import { BubbleSpin } from './styles';

interface Props {
  size: number;
  duration: number;
  color: string;
}

const Loading: React.FC<Props> = ({ size, color, duration}) => (
  <BubbleSpin size={size} color={color} duration={duration}/>
);

export default Loading;
