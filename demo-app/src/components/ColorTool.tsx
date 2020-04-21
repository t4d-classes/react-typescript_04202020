import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorToolProps {
  colors: Color[];
}

interface ColorFormState {
  name: string;
  hexcode: string;
}

type ColorsState = Color[];

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colorForm, setColorForm ] = useState<ColorFormState>({ name: '', hexcode: '' });
  const [ colors, setColors ] = useState<ColorsState>(props.colors.concat());

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {

    setColors(colors.concat({
      name: colorForm.name,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
    }));

    setColorForm({
      name: '',
      hexcode: '',
    });

  }

  return (
    <>
      <header className="page-header">
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="name-input">New Color</label>
          <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">New Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};