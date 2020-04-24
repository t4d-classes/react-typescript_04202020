import React, { FC, useState, useCallback, useContext } from 'react';

import { Car } from './models/Car';

import { all, append, replace, remove } from './services/cars';

interface CarToolContext {
  // application state - is the data
  cars: Car[];
  editCarId: number;
  // application actions - are the things we can do to change the data
  onRefreshCars: () => Promise<Car[]>;
  onAppendCar: (car: Car) => Promise<Car>;
  onReplaceCar: (car: Car) => Promise<void>;
  onRemoveCar: (carId: number) => Promise<void>;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
}

const CarStoreContext = React.createContext<CarToolContext>({
  cars: [],
  editCarId: -1,
  // in this context, the reject is equivalent to null but in promise speak
  onRefreshCars: () => Promise.reject(),
  onAppendCar: (car: Car) => Promise.reject(),
  onReplaceCar: (car: Car) => Promise.reject(),
  onRemoveCar: (carId: number) => Promise.reject(),
  onEditCar: (carId: number) => null,
  onCancelCar: () => null,
});


export const CarStore: FC<{}> = ({ children }) => {

  // Application State
  // data managed by the application
  const [ cars, setCars ] = useState<Car[]>([]);
  // data used to display the ui in certain ways
  const [ editCarId, setEditCarId ] = useState<number>(-1);

  const refreshCars = useCallback(() => all().then(cars => {
    setCars(cars);
    return cars;
  }), [ setCars ]);

  const contextValue: CarToolContext = {
    // cars: cars,
    cars, // shorthand of the above
    editCarId,
    onRefreshCars: useCallback(() => {
      return refreshCars();
    }, [ refreshCars ]),
    // onAppendCar: (car: Car) => {
    //   return append(car)
    //     // .then((car: Car) => contextValue.onRefreshCars().then(() => car))
    //     .then(async (car: Car) => {
    //       await contextValue.onRefreshCars();
    //       return car;
    //     })
    //     .then((car) => {
    //       setEditCarId(-1);
    //       return car;
    //     });
    // },
    onAppendCar: useCallback(async (car: Car) => {
      const appendedCar = await append(car);
      await refreshCars();
      setEditCarId(-1);
      return appendedCar;
    }, [ refreshCars ]),
    onReplaceCar: useCallback((car: Car) => {
      return replace(car)
        .then(() => refreshCars())
        .then(() => {
          setEditCarId(-1);
        });
    }, [ refreshCars ]),
    onRemoveCar: useCallback((carId: number) => {
      return remove(carId)
        .then(() => refreshCars())
        .then(() => {
          setEditCarId(-1);
        });
    }, [ refreshCars ]),
    onEditCar: useCallback(
      (carId: number) => setEditCarId(carId),
      [ setEditCarId ],
    ),
    onCancelCar: useCallback(
      () => setEditCarId(-1),
      [ setEditCarId ],
    ), 
  };

  return <CarStoreContext.Provider value={contextValue}>
    {children}
  </CarStoreContext.Provider>;

};

export const connectToCarStore = (PresentationalComponent: FC<CarToolContext>) => {

  return () => <CarStoreContext.Consumer>
    {contextValue => <PresentationalComponent {...contextValue} />}
  </CarStoreContext.Consumer>;

};

export const useCarStore = () => {
  return useContext(CarStoreContext);
};