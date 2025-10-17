let num = parseInt(prompt("Ingresa un número de tres dígitos:"));
let digitos = num.toString().split('');
let suma = 0;

for (let d of digitos) {
  suma += Math.pow(parseInt(d), 3);
}

alert(suma === num
  ? `${num} es un número de Armstrong.`
  : `${num} no es un número de Armstrong.`);
