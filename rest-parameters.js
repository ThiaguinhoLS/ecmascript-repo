function someFunction(...rest) {
  for(let i = 0; i < rest.length; i++) {
    console.log(`Argument ${ i + 1 }: ${ rest[i] }`);
  }
}

someFunction('Jon', 'Aegon', 'Targaryen');

