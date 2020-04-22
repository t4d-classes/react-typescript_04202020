import React, { FC } from 'react';

import { Car } from '../models/Car';

export interface CarViewRowProps {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
}

export const CarViewRow: FC<CarViewRowProps> = ({ car, onEditCar, onDeleteCar }) => {

  return (
    <tr key={car.id}>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => onEditCar(car.id as number)}>Edit</button>
        <button type="button" onClick={() => onDeleteCar(car.id as number)}>Delete</button>
      </td>
    </tr>
  );

};