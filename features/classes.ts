// classes = blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

// first => define a set of fields (values) and methods (functions) to represent a 'thing'

// second => define a set of fields (values) and methods (functions) to represent a 'thing'

// capitalize name of class
// class Vehicle {
//   drive(): void {
//     console.log('chugga chugga');
//   }

//   honk(): void {
//     console.log('beep beep');
//   }
// }

// type of vehicle -> whatever a car can do, a vehicle should be able to do
// take all methods and intances of Vehicle in Car - so it can now access everything a vehicle has
// class Car extends Vehicle {
//   // if we want a different implementation of drive here in Car, we need to redefine it
//   drive(): void {
//     return console.log('vroom vroom');
//   }
// }

// const car = new Car();
// car.drive();
// car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// ts-node classes.ts to run

// SECTION CLASS METHOD MODIFIERS
// STUB Public -> this method can be called anywhere , anytime

// class Vehicle {
//   public drive(): void {
//     console.log('chugga chugga');
//   }

//   public honk(): void {
//     console.log('beep beep');
//   }
// }

// class Car extends Vehicle {
//   // if we want a different implementation of drive here in Car, we need to redefine it
//   public drive(): void {
//     return console.log('vroom vroom');
//   }
// }

// const car = new Car();
// car.drive();
// car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// STUB Private -> This method can only be called by other methods in THIS class

// class Vehicle {
//   public drive(): void {
//     console.log('chugga chugga');
//   }

//   public honk(): void {
//     console.log('beep beep');
//   }
// }

// class Car extends Vehicle {
//   // if we want a different implementation of drive here in Car, we need to redefine it
//   private drive(): void {
//     return console.log('vroom vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const carnew = new Car();
// carnew.startDrivingProcess();
// carnew.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// STUB Protected -> This method can be called by other methods in THIS class, or by other methods in child classes

// class Vehicle {
//   public drive(): void {
//     console.log('chugga chugga');
//   }

//   protected honk(): void {
//     console.log('beep beep');
//   }
// }

// class Car extends Vehicle {
//   // if we want a different implementation of drive here in Car, we need to redefine it
//   private drive(): void {
//     return console.log('vroom vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const carnew = new Car();
// carnew.startDrivingProcess();
// carnew.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// SECTION FIELD IN CLASSES
class Vehicle {
  // optional because of contructor
  // color: string = 'red';
  // color: string;

  // // special function when creating a new variable
  // constructor(color: string) {
  //   this.color = color;
  // }

  // shortcut for redundancies in constructor
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

// class Car extends Vehicle {
//   // if we want a different implementation of drive here in Car, we need to redefine it
//   private drive(): void {
//     return console.log('vroom vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

const vehicle = new Vehicle('blue');
console.log(vehicle.color);
