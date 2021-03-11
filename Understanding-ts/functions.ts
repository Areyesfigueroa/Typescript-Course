const add = (num1: number, num2: number):number => {
    return num1 + num2;
};

const printResult = (num: number):void => {
    console.log(num);
};

printResult(add(1, 2));

let combineValues: (a: number, b: number) => number;
combineValues = add;

printResult(combineValues(10, 2));