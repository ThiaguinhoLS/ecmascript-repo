// Create entries
localStorage.setItem('name', 'jon');

// Reading entries
localStorage.getItem('name'); // 'jon'

// Updating entries
localStorage.setItem('name', 'aegon');

// Deleting entries
localStorage.removeItem('name');

// Clearing everything
localStorage.clear();

// Storing Json Object
let someObject = { entries: [1, 2, 3] };
localStorage.setItem('object', JSON.stringify(someObject));

// Reading Json Object
let data = JSON.parse(localStorage.getItem('object'));

// Checking support
if (window.localStorage) {
  // Is supported
}

// Iterating over items

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  // do something
}

