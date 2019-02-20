'use strict';

function getUser() {
  return new Promise((resolve, reject) => {
    const user = { name: 'Aegon' };
    setTimeout(() => resolve(user), 3000);
  });
}

getUser()
  .then(user => console.log(user))
