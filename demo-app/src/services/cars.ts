import { Car } from "../models/Car";


export const all: () => Promise<Car[]> = () => {

  return fetch('http://localhost:3060/cars')
    .then((res) => {
      return res.json();
    });

};

export const append: (car: Car) => Promise<Car> = (car: Car) => {

  return fetch('http://localhost:3060/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());

};