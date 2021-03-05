// annotations are optional unless we will initialize an array but we have specific type in our minds
// const carMakers: string[] = ['fords', 'toyota', 'chevy'];
const carMakers = ['fords', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [['f150'], ['corola'], ['camaro']];
const carsByMake = [['f150'], ['corola'], ['camaro']];

// help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

//  Prevent incompatible values
// carMakers.push(100);

//  Help with 'map
carMakers.map((car: string): string => {
  return car;
});

// flexible types
// const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());

//  we use types arays when we need to represent a collection of records with some arbitrary sort order
