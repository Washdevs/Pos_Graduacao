var example = 5;

function test() {
  var testVariable = 10;

  console.log(example); // Expect output: 5

  console.log(testVariable); // Expect output: 10
}

test();

console.log(example); // Definida no escopo global, Lembrada em qualquer lugar

console.log(testVariable); // Erro. Isto porque ela não existe fora, só dentro da função

// Variável definida no escopo de função, ela só é lembrada na função
