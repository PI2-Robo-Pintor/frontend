import React from 'react';

import { BubbleSpin } from './styles';

interface Props {
  color: string;
}

const Loading: React.FC<Props> = ({ color}) => (
  <BubbleSpin color={color}/>
);

export default Loading;
