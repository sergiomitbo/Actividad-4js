let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

let inicio = Math.min(num1, num2);
let fin = Math.max(num1, num2);

for (let i = inicio; i <= fin; i++) {
  if (i % 8 === 0) console.log(i);
}
