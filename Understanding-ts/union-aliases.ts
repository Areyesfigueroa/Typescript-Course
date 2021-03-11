
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor) => {
    let result: number | string;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const numRes = combine(10, 5, 'as-number');
const stringRes = combine("Aliel", " is admin", 'as-string');

console.log(numRes);
console.log(stringRes);