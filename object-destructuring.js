const someObject = {
  quantity: 3,
  color: {
    basic: ['red', 'gray'],
    advanced: ['green']
  },
  name: 'Some Object'
};

const { quantity, name } = someObject;
const { quantity: quantityObject, name: nameObject } = someObject;

