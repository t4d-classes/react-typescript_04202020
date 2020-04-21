import React from 'react';

import { Car } from '../models/Car';

// function declaration
// function CarRow(car) {
//   return <tr key={car.id}>
//     <td>{car.id}</td>
//     <td>{car.make}</td>
//     <td>{car.model}</td>
//     <td>{car.year}</td>
//     <td>{car.color}</td>
//     <td>{car.price}</td>
//   </tr>;
// }

// // function expression
// const CarRow = function(car) {
//   return <tr key={car.id}>
//     <td>{car.id}</td>
//     <td>{car.make}</td>
//     <td>{car.model}</td>
//     <td>{car.year}</td>
//     <td>{car.color}</td>
//     <td>{car.price}</td>
//   </tr>;
// }

// // arrow function
// const CarRow = car => {
//   return <tr key={car.id}>
//     <td>{car.id}</td>
//     <td>{car.make}</td>
//     <td>{car.model}</td>
//     <td>{car.year}</td>
//     <td>{car.color}</td>
//     <td>{car.price}</td>
//   </tr>;
// }

// const CarRow = car => <tr key={car.id}>
//   <td>{car.id}</td>
//   <td>{car.make}</td>
//   <td>{car.model}</td>
//   <td>{car.year}</td>
//   <td>{car.color}</td>
//   <td>{car.price}</td>
// </tr>;


export const CarTool = () => {

  const cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'blue', price: 100000 },
  ];

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(function(car) {
            return <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );

};