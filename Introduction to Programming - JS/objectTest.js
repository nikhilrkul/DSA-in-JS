const people = [
  {
    name: "Nikhil",
    age: 27,
  },
];

const employees = [...people];
employees[0].age = 30;
console.log(people);

const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(b);
