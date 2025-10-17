let texto = prompt("Ingresa un texto:");
let contador = 0;
for (let letra of texto.toLowerCase()) {
  if ("aeiou".includes(letra)) contador++;
}
alert(`El texto tiene ${contador} vocales.`);
