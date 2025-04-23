const fn1 = (x, y) => {
  return x + y;
};

const fn2 = (x, y) => x + y;

const fn3 = x => x;

const fn4 = () => {};

const fn5 = a => ({ a: 'valor' });

console.log(fn5());
