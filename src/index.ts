import { sum } from "./calc";

let printMessage = (msg: string): void => console.log(`Komunikat: ${msg}`);
let message = ("Witaj, TypeScript");
printMessage(message);
debugger;

let total = sum(100, 200, 300);
console.log(`Wartość całkowita: ${total}`);