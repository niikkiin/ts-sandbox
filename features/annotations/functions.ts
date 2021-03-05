// always use returning annotations
const add = (a: number, b: number): number => {
  return a + b; 
};

const subtract = (a: number, b: number): number => {
  return a - b; 
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

// void = not return anything
// can return null and undefined
const logger = (message: string): void => {
  console.log(message);
}

//  we are never reach the end of this function
//  throw error and exit the function early without returning a value
const throwError = (message: string): never => {
  throw new Error(message);
}

// destructuring anotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
//  forecast => { date, weather }
const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
  // console.log(forecast.date);
  // console.log(forecast.weather);
}

logWeather(todaysWeather)