import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'black' },
  { id: 2, name: 'blue' },
  { id: 3, name: 'green' },
  { id: 4, name: 'yellow' },
  { id: 5, name: 'silver' },
  { id: 6, name: 'pink' },
];

const carList: Car[] = [];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

