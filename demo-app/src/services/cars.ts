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

export const replace: (car: Car) => Promise<void> = (car: Car) => {

  return fetch('http://localhost:3060/cars/' + encodeURIComponent(String(car.id)), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then(res => res.json());

};

export const remove: (carId: number) => Promise<void> = (carId: number) => {

  return fetch('http://localhost:3060/cars/' + encodeURIComponent(String(carId)), {
    method: 'DELETE',
  })
    .then(res => res.json());

};