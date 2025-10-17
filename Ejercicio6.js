let secreto = Math.floor(Math.random() * 10) + 1;
let intento;

do {
  intento = parseInt(prompt("Adivina el número (1 al 10):"));
} while (intento !== secreto);

alert("¡Correcto! El número era " + secreto);
