import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorToolProps {
  colors: Color[];
}

interface ColorToolState {
  name: string;
  hexcode: string;
  [ x: string ]: any;
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  // colorForm represents the data collected on the form
  // setColorForm is the function which update the form data and re-renders the component
  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' } as ColorToolState);

  const colorListItems = props.colors.map( (color) =>
    <li key={color.id}>{color.name}</li>);

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  console.log('re-rendering', colorForm);

  return (
    <>
      <header className="page-header">
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'name-input' }, 'New Color') */}
          <label htmlFor="name-input">New Color</label>
          <input type="text" id="name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">New Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
      </form>
    </>
  );

};