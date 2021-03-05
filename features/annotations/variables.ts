// aanotations
//  type inference = if declaration and initialization are on the same line, typescript will figure out the type of 'color' for us
// let apples = 5;

// NOTE USE TYPE ANNOTATIONS WHEN
// 1. when we declare a variable on one line then initialize it later
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

// any => a tyle, just as 'string' or 'boolean' are
//  means TS has no idea what this is - can't check for correct property references
//  avoid variables with 'any at all costs


//  when we want a variable to have a type that can't be inferred
//  when a function returns the 'any' type and we need to clarify the value


// 2 When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i=0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; //type annotation


for (let i=0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// NOTE USE TYPE INFERENCE WHEN
// ALWAYS!!!
let apples: number = 5;

// apples = 14;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in objects
let now: Date = new Date();

// array
let colors: string[] = ['yellow', 'green', 'pink'];
let myDigits: number[] = [1,2,3];
let truths: boolean[] = [true, false, true]

// Classes - capitalized name


class Car {

}

// small case means an instance of a class or the Car
let car: Car = new Car();

// object literal
let point: {x: number, y:number} = {
  x: 10,
  y: 20
};

//  functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}