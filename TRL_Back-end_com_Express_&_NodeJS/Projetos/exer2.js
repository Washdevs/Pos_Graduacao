console.log('Hoisted antes da atribuição');
console.log(hoisted);
var hoisted = 'this got hoisted';

console.log('Hoisted depois da atribuição');

try {
  console.log(notHoisted1);
} catch (e) {
  console.log('Not hoisted1 with error:' + e.message);
}
let notHoisted1 = 5;
console.log(notHoisted1);

try {
  console.log(notHoisted2);
} catch (e) {
  console.log('Not hoisted2  with error:' + e.message);
}

const notHoisted2 = [1, 2, 3];
console.log('notHoisted2 depois da atribuição:' + notHoisted2);

try {
  notHoisted2 = 'Novo Valor';
} catch (e) {
  console.log('Not hoisted2 não pôde ser alterado:' + e.message);
}

notHoisted2.push(5);

console.log('notHoisted2 atualizado. Agora é:' + notHoisted2);
