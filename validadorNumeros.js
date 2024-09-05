const prompt = require('prompt-sync')();

const num1 = parseInt(prompt("Ingrese el primer número: "));
const num2 = parseInt(prompt("Ingrese el segundo número: "));
const num3 = parseInt(prompt("Ingrese el tercer número: "));
let nums = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
    console.log("Todos los números ingresados son iguales");
}
else {
    nums.sort();
    console.log(nums.join(", "));
}