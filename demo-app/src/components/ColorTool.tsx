import React, { FC } from 'react';

import { Color } from '../models/Color';

export interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const colorListItems = props.colors.map( (color) =>
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