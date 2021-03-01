/*##################################################################*/
/* Nome do programa : PTI - Algoritmos e Programação I */
/* Nome do professor : Gustavo Calixto */
/* Nome do aluno : Higor Henrique Blandes Correia */
/*##################################################################*/
var nCombustivel,precoGasolina,precoAlcool,calculoresultado;
alert('############################################################ \n');
alert(' \                Bem vindo ao Álcool&Gasolina Price ! \n');
alert('############################################################ \n');
resp = prompt('Deseja consultar qual combustível é melhor abastecer ? (Sim / Não ) \n');
resp = resp.toUpperCase();
while((resp == 'S') || (resp == 'SIM')){
  alert('\n Para esse programa você deve utilizar as casas decimais separadas por "." - Exemplo : 1.20 ou 1.2 ! \n');
  precoAlcool = prompt('Digite o preço atual do Álcool : ');
  precoGasolina = prompt ('Digite o preço atual da Gasolina : ');
  calculoresultado = precoAlcool/precoGasolina;
  if( calculoresultado > 0.7){
    nCombustivel = 'gasolina';
    alert('\n Você terá uma melhor vantagem se abastecer com ' + nCombustivel + '\n');
  }else if(calculoresultado < 0.7)
  {  nCombustivel = 'álcool';
     alert('\n Você terá uma melhor vantagem se abastecer com ' + nCombustivel + '\n');
  }else if (calculoresultado = 0.7)
  { alert('\n Escolha um combustível de sua preferência, tanto faz abastecer com um ou outro. \n');
  }
 resp = prompt('Deseja consultar mais uma vez ? (Sim / Não ) \n');
 resp = resp.toUpperCase(); 
}alert('\n Obrigado por usar o Álcool&Gasolina Price. \n');
