import React, { FC } from 'react';

import { Color } from '../models/Color';

export interface ColorListProps {
  colors: Color[];
}

export const ColorList: FC<ColorListProps> = ({ colors }) => {

  return (
    <ul>
      {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
    </ul>
  );


};