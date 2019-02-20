function* someGenerator() {
  yield 'One';
  yield 'Two';
  yield 'Three';
}

const gen = someGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done ? 'End' : 'Continue');

