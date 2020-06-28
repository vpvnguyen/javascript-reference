const array = [
  { id: 1, name: "Vincent", username: "vpvnguyen" },
  { id: 2, name: "John", username: null },
  { id: 3, name: "Doe", username: null },
];

const arrayMap = array.map((value) => {
  if (value.username !== null) return value;
});

const arrayReduce = array.reduce((result, value) => {
  if (value.username !== null) result.push(value);
  return result;
}, []);

console.log("arrayMap", arrayMap);
// arrayMap [
//   { id: 1, name: 'Vincent', username: 'vpvnguyen' },
//   undefined,
//   undefined
// ]

console.log("arrayReduce", arrayReduce);
// arrayReduce [ { id: 1, name: 'Vincent', username: 'vpvnguyen' } ]
