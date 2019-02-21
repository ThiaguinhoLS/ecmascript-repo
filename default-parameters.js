function add(x, y = 2) {
  return x + y;
}

function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error('AssertionError');
  }
}

assert(add(1, 2), 3);
assert(add(1), 3);

