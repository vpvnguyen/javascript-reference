const rankings = [
  { name: "John", rank: 3 },
  { name: "Vincent", rank: 1 },
  { name: "Zack", rank: 2 },
];

// const sortedActivities = activities.sort((a, b) => b.date - a.date);

const ranked = rankings.sort((prop1, prop2) => {
  console.log(`prop2: ${prop2.rank}, prop1: ${prop1.rank}`);
  console.log(`prop2.rank - prop1.rank: ${prop2.rank - prop1.rank}`);

  return prop2.rank - prop1.date;
});

// prop2: 3, prop1: 1
// prop2.rank - prop1.rank: 2
// prop2: 1, prop1: 2
// prop2.rank - prop1.rank: -1

console.log(ranked);

// [
//     { name: 'John', rank: 3 },
//     { name: 'Vincent', rank: 1 },
//     { name: 'Zack', rank: 2 }
// ]
