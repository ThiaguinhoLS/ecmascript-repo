const someObject = {
  values: [1, 2, 3],
  name: 'Some Object'
};

for(let key in someObject) {
  console.log(`${key} => ${someObject[key]}`);
}

