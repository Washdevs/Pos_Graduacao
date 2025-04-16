// Exercício 1: Implementando o Escopo de Bloco. Livro Advanced JavaScript

//Cada bloco mesmo dentro de uma função com variáveis com mesmo nome são mostradas diferentes, pois o valor de cada var esta no seu bloco.

function fn1() {
  console.log('escopo1');
  var escopo = 5;
  console.log(escopo);

  {
    console.log('escopo2');

    var escopo = 2;
    console.log(escopo);
  }

  {
    console.log('escopo3');
    var escopo = 7;
    console.log(escopo);
  }
}

fn1();
