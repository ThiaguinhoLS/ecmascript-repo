const map = new Map();

// Set key in map
map.set('name', 'Jon');
map.set(() => 'Key is a function');

// Check if key exists
map.has('name'); // 'Jon'

// Delete key
map.delete('name');

// Clear map
map.clear();

// Initializing map with array
const someArray = [
  ['1', 'One'],
  ['2', 'Two'],
  ['3', 'Three']
];

const someMap = new Map(someArray);

// Iterating over maps

const winners = new Map();
winners.set(1, 'Jon');
winners.set(2, 'Aegon');

for(let [position, name] of winners) {
  console.log(`Winner ${name} in position: ${position}`);
}

// Or use forEach

winners.forEach((value, key) => {
  console.log(`Winner ${value} in position: ${key}`);
});

