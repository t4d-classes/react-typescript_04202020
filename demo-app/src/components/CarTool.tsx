import React, { FC, useState, useEffect, useCallback } from 'react';

import { Car } from '../models/Car';
import { all, append, replace, remove} from '../services/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { useCarStore } from '../CarStore';

export interface CarToolProps {
  // cars: Car[];
  // editCarId: number;
  // onRefreshCars: () => Promise<Car[]>;
  // onAppendCar: (car: Car) => Promise<Car>;
  // onReplaceCar: (car: Car) => Promise<void>;
  // onRemoveCar: (carId: number) => Promise<void>;
  // onEditCar: (carId: number) => void;
  // onCancelCar: () => void;
}

export const CarTool: FC<CarToolProps> = (ignoreProps) => {

  const props = useCarStore();

  const refreshCars = props.onRefreshCars;

  useEffect(() => {
    refreshCars();
  }, [ refreshCars ]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} editCarId={props.editCarId}
        onEditCar={props.onEditCar} onDeleteCar={props.onRemoveCar}
        onSaveCar={props.onReplaceCar} onCancelCar={props.onCancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={props.onAppendCar} />
    </>
  );

};