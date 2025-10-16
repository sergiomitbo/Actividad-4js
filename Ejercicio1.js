let niveles = "5";
for (let i=0; i < niveles; i++){
    let espacios = " ".repeat(niveles - i - 1);
    let asteriscos = "*".repeat(2 * i + 1);
    console.log(espacios + asteriscos);
}