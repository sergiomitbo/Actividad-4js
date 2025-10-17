let n = parseInt(prompt("Ingresa un número:"));
let esPrimo = true;

if (n <= 1) esPrimo = false;
else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

alert(esPrimo ? `El número ${n} es primo.` : `El número ${n} no es primo.`);
