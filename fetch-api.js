// GETi basic

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => users.map(user => user.username))
  .then(userNames => console.log(userNames));


const data = {
  title: 'My post',
  body: 'content of post',
  userId: 1
};

const options = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(res => res.json())
  .then(data => console.log(data));

// Handler errors

fetch('https://jsonplaceholder.typicode.com/error-x')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject({ status: res.status, statusText: res.statusText });
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log(`Error: ${err.statusText}`));

// fetch with async / await
//
async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();
  data = data.map(user => user.username);
  return data;
}

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok)
    throw new Error(res.status);

  const data = await res.json();
  return data;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    console.log(data.map(user => user.username));
  });

