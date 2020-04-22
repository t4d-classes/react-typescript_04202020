import React, { FC, useState } from 'react';

import { Car } from '../models/Car';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export interface CarToolProps {
  cars: Car[];
}

type CarsState = Car[];

export const CarTool: FC<CarToolProps> = (props) => {

  const [ cars, setCars ] = useState<CarsState>(props.cars.concat());

  const addCar = (car: Car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
    }));

  };

  const deleteCar = (carId: number) => {

    setCars(cars.filter(car => car.id !== carId));

  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};