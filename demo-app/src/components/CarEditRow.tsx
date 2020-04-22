import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/Car';

export interface CarEditRowProps {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

interface CarFormState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export const CarEditRow: FC<CarEditRowProps> = ({ car, onSaveCar, onCancelCar }) => {

  const [ carForm, setCarForm ] = useState<CarFormState>({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const saveCar = () => {

    onSaveCar({ ...carForm, id: car.id });

  };

  return (
    <tr key={car.id}>
      <td>{car.id}</td>
      <td><input type="text" name="make"
        value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model"
        value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year"
        value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color"
        value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price"
        value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

};