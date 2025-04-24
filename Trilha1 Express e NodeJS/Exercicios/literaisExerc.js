const casa = {
  endereço: '123 Main St, San Francisco CA, EUA',
  andares: 2,
  preço: 5000000,
  proprietário: 'John Doe',
};

function parseHouse(prop) {
  return `${prop.proprietário} está vendendo o imóvel  em ${prop.endereço} por ${prop.preço}.`;
}

console.log(parseHouse(casa));

// Nesta seção, abordamos literais de modelo.
//  Literais de modelo aprimoram strings, permitindo-nos aninhar expressões dentro delas, que são analisadas em tempo de execução.
//  As expressões são inseridas com a seguinte sintaxe: `${ expressão }`.
