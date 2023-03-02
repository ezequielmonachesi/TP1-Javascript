let frase = prompt("texto");
let cantVocales = [];
for (let i = 0; i <= frase.length; i++) {
  if (
    frase.charAt(i) == "a" ||
    frase.charAt(i) == "e" ||
    frase.charAt(i) == "i" ||
    frase.charAt(i) == "o" ||
    frase.charAt(i) == "u"
  ) {
    cantVocales.push(frase.charAt(i));
  }
}
document.write(`<h1> Las vocales encontradas en el texto ingresado son: </h1><br>
${cantVocales}
`);
