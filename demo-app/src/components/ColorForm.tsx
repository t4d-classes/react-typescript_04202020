import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorFormProps {
  buttonText: string;
  onSubmitColor: (color: Color) => void;
}

interface ColorFormState {
  name: string;
  hexcode: string;
}

export const ColorForm: FC<ColorFormProps> = (props) => {

  const [ colorForm, setColorForm ] = useState<ColorFormState>(
    { name: '', hexcode: '' });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const submitColor = () => {

    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: '',
      hexcode: '',
    });

  };

  return (
    <form>
      <div>
        <label htmlFor="name-input">New Color</label>
        <input type="text" id="name-input" name="name"
          value={colorForm.name} onChange={change} />
      </div>
      <div>
        <label htmlFor="hexcode-input">New Hexcode</label>
        <input type="text" id="hexcode-input" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );

};