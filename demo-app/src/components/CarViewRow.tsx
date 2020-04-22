import React, { FC } from 'react';

import { Car } from '../models/Car';

export interface CarViewRowProps {
  car: Car;
  onDeleteCar: (carId: number) => void;
}

export const CarViewRow: FC<CarViewRowProps> = ({ car, onDeleteCar }) => {

  const deleteCar = () => {
    onDeleteCar(car.id as number);
  }

  return (
    <tr key={car.id}>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td><button type="button" onClick={deleteCar}>Delete</button></td>
    </tr>
  );

};