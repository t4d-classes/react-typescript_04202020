import React, { FC } from 'react';

import { Color } from '../models/Color';

export interface ColorListProps {
  colors: Color[];
  onDeleteColor: (colorId: number) => void;
}

export const ColorList: FC<ColorListProps> = ({ colors, onDeleteColor }) => {

  return (
    <ul>
      {colors.map(color => {

          const deleteColor = () => {
            onDeleteColor(color.id as number)
          };

          return <li key={color.id}>{color.name} <button type="button" onClick={deleteColor}>X</button></li>;
      })}
    </ul>
  );


};