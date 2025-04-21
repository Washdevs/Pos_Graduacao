// Assuma que numArray é uma matriz de números
// ( numArray ) => numArray.filter( n => n > 5).map( n => n - 1 ).every( n => n < 10 )
// Função de seta com um único corpo de linha dividido em várias linhas
// Assuma que numArray é uma matriz de números

const fn1 = function (x, y) {
  return x + y;
};

const fn2 = (x, y) => {
  return x + y;
};

console.log(fn1(5, 5), fn2(2, 3));

const numArray = [23, 232, 252, 11, 424, 44, 23, 56, 53, 48, 73];

const result = numArray =>
  numArray
    .filter(n => n > 100)
    .map(n => n - 1)
    .every(n => n < 10);

console.log(result());
