var string = "Não é a mamãe";
let resultado = [];

for (var i = 0; i < string.length; i++) {
  resultado[i] = string.charCodeAt(i);
}
alert(resultado);