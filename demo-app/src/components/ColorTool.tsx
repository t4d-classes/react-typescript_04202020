import React, { FC, useState } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: Color[];
}

type ColorsState = Color[];

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, setColors ] = useState<ColorsState>(props.colors.concat());

  const addColor = (color: Color) => {

    setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
    }));

  };

  const deleteColor = (colorId: number) => {
    setColors(colors.filter(c => c.id !== colorId));
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};