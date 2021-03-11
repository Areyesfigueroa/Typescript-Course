export {};
let userInput: unknown;
let userName: string;

userInput = 7;
userInput = "Aliel";

if(typeof userInput === 'string') {
    userName = userInput;
}

const generateError = ():never => {
    throw({ message: "Error occured" });
}

generateError();
console.log(userName);