const a = 5;
const b = 10;
console.log('a + b é igual à ' + (a + b));

console.log(`a + b é igual à ${a + b}`);

//Uma forma mais avançada de literais de modelo são os literais de modelo marcados.
//Literais de modelo marcados podem ser analisados ​​com uma função especial chamada funções de tag
//e podem retornar uma string manipulada ou qualquer outro valor

function tagFunction(strings, numExp, fruitExp) {
  const str0 = strings[0];
  const str1 = strings[1];
  const str2 = strings[2];

  const quantidade = numExp < 10 ? 'muito poucos' : 'muitos';

  return str0 + quantidade + str1 + fruitExp + str2;
}

const fruit = 'maçã',
  num = 11;

const output = tagFunction`Temos ${num} de ${fruit}. empolgante!!`;

console.log(output);

// Uma propriedade especial chamada raw está disponível para o primeiro argumento de um modelo marcado.
// Essa propriedade retorna um array que contém as versões brutas, sem escape, de cada parte do literal do modelo dividido.

function tagFunc(strings) {
  console.log(strings.raw[0]);
}

tagFunc`Esta é a linha 1. \n Esta é a linha 2.`;
