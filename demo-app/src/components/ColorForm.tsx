import React, { FC } from 'react';

import { Color } from '../models/Color';
import { useForm } from '../hooks/useForm';

export interface ColorFormProps {
  buttonText: string;
  onSubmitColor: (color: Color) => void;
}

interface ColorFormState {
  name: string;
  hexcode: string;
}

export const ColorForm: FC<ColorFormProps> = (props) => {

  const [ colorForm, change, resetColorForm ] =
    useForm<ColorFormState>({ name: '', hexcode: '' });

  const submitColor = () => {

    // casting it as Color because it has the color properties
    props.onSubmitColor({ ...colorForm });

    resetColorForm();

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