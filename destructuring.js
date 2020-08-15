// Let’s start with the basics. Here is a simple example that extracts a single prop.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { name } = user;
console.log(name); //prints: Fred

// Here is another example that extracts the props, but assigns it to a different name.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { name: callSign } = user;
console.log(callSign); //prints: Fred

// Destructuring also works for nested objects.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
  education: {
    degree: "Masters",
  },
};
const {
  education: { degree },
} = user;
console.log(degree); //prints: Masters

// But what happens when the nested object is missing?
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const {
  education: { degree },
} = user; // TypeError: Cannot match against 'undefined' or 'null'.

// We can solve this by adding a default value.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { education: { degree } = {} } = user;
console.log(degree); //prints: undefined

// But what happens when you nest even more?
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { education: { school: { name } } = {} } = user; // TypeError: Cannot match against 'undefined' or 'null'.

// We can continue to add more default values to solve this problem. But what is interesting is there is more than one solution.
// The first solution is to add a default value for school.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { education: { school: { name } = {} } = {} } = user;
console.log(name); //prints: undefined

// The other solution is to expand the education default value.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { education: { school: { name } } = { school: {} } } = user;
console.log(name); //prints: undefined

// Either solution seems acceptable, but consider case where you want to add a default for the school name.
// In the first solution we have.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { education: { school: { name = "Dunno" } = {} } = {} } = user;
console.log(name); //prints: Dunno

// And in the second solution it will be.
const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const {
  education: { school: { name } } = { school: { name: "Dunno" } },
} = user;
console.log(name); //prints: Dunno
