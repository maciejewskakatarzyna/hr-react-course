import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = ({ average, children }) => (
  <StyledAverage value={average}>{children}</StyledAverage>
);

export default Average;
