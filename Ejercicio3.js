let n = prompt("Ingresa un número:");
let f = 1;

for (let i = 1; i <= n; i++) {
  f *= i;
}

alert("El factorial de " + n + " es " + f);
