var operacao,numero1,numero2,result;
alert('#############################################');
alert('\n');
numero1 = parseInt(prompt('Digite o primeiro número : '));
numero2 = parseInt(prompt('Digite o segundo número : '));
alert('#############################################');
alert('\n');
alert('Operações disponíveis, selecione uma das opções.');
alert('\n');
alert(' 1 - Adição');
alert(' 2 - Subtração');
alert(' 3 - Divisão');
alert(' 4 - Multiplicação');
alert('\n');
alert('#############################################');
operacao = parseInt(prompt('Digite a operação desejada :'));

function adicao(valor1, valor2){
  return valor1+valor2;
}
function subtracao(valor1, valor2){
  return valor1-valor2;
}
function divisao(valor1, valor2){
  return valor1/valor2;
}
function multiplicacao(valor1, valor2){
  return valor1*valor2;
}
if(operacao == 1){
  alert('O resultado da operação é : '+ adicao(numero1, numero2));
}else if(operacao == 2){
 alert('O resultado da operação é : '+ subtracao(numero1, numero2));
}else if(operacao == 3){
 alert('O resultado da operação é : '+ divisao(numero1, numero2));
}else if(operacao == 4){
  alert('O resultado da operação é : '+ multiplicacao(numero1, numero2));
}else{
  alert('Digite um número valido para operação.');
}









