import React from 'react';

import { Color } from '../models/Color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'black' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
    { id: 4, name: 'yellow' },
    { id: 5, name: 'silver' },
    { id: 6, name: 'pink' },
  ];

  const colorListItems = colors.map( (color) =>
    <li key={color.id}>{color.name}</li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </>
  );

};