import React, { FC } from 'react';

import { Color } from '../models/Color';

export interface ColorListProps {
  colors: Color[];
  sortDir: boolean;
  onDeleteColor: (colorId: number) => void;
  onSortColors: (sortDir: boolean) => void;
}

export const ColorList: FC<ColorListProps> = ({ colors, sortDir, onDeleteColor, onSortColors }) => {

  return (
    <>
      <button type="button" onClick={() => onSortColors(!sortDir)}>Sort</button>
      <ul>
        {colors.map(color => {

            const deleteColor = () => {
              onDeleteColor(color.id as number)
            };

            return <li key={color.id}>{color.name} <button type="button" onClick={deleteColor}>X</button></li>;
        })}
      </ul>
    </>
  );


};