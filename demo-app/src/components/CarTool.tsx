import React, { FC, useState, useEffect, useCallback } from 'react';

import { Car } from '../models/Car';
import { all, append } from '../services/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export interface CarToolProps {
  cars: Car[];
}

type CarsState = Car[];

export const CarTool: FC<CarToolProps> = (props) => {

  const [ cars, setCars ] = useState<CarsState>(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState<number>(-1);

  const refreshCars = useCallback(() => {
    return all().then(cars => setCars(cars));
  }, []);

  const addCar = (car: Car) => {
    return append(car)
      .then(() => refreshCars())
      .then(() => {
        setEditCarId(-1);
      });
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(car => car.id !== carId));
    setEditCarId(-1);
  };

  const replaceCar = (car: Car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  useEffect(() => {

    refreshCars();

  }, [ refreshCars ]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={replaceCar} onCancelCar={() => setEditCarId(-1)} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};