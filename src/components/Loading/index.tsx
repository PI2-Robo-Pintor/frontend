import React from 'react';

import { BubbleSpin } from './styles';

interface Props {
  color: string;
}

const Loading: React.FC<Props> = ({ color}) => (
  <BubbleSpin data-testid='LoadingIcon' color={color}/>
);

export default Loading;
