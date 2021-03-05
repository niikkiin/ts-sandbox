// interfaces + classes = how we get really strong code in TS

// interfaces = creates a new type, describing the property names and value types of an object

// object
// annotation is really long!! vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }
// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
// };

// // void -> function returns nothing
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

// needs to be always capital
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string; //function that will return a string
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   }
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

// functions in interface
// interface Reportable {
//   summary(): string; //function that will return a string
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugarContent: 40,
//   summary(): string {
//     return `My drink has ${this.sugarContent} grams of sugar.`
//   }
// }

// const printSummary = (item: Reportable): void => {
//   console.log(item.summary);
// };

// printSummary(oldCivic);

//  reusing interfaces
interface Reportable {
  summary(): string; //function that will return a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
  summary(): string {
    return `My drink has ${this.sugarContent} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink);
