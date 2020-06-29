// src: https://flaviocopes.com/how-to-sort-array-by-date-javascript/

const activities = [
  { title: "Hiking", date: new Date("2019-06-28") },
  { title: "Shopping", date: new Date("2019-06-10") },
  { title: "Trekking", date: new Date("2019-06-22") },
  { title: "I am the top", date: new Date("2020-06-28") },
  { title: "Bottom of Hiking", date: new Date("2019-06-29") },
  { title: "I am at the bottom", date: new Date("1988-11-21") },
];

let dates = [
  {
    name: "b",
    date: new Date("2020-05-30T20:21:31Z"),
  },
  {
    name: "c",
    date: new Date("2020-06-28T23:38:32Z"),
  },
  {
    name: "a",
    date: new Date("1988-06-28T23:38:32Z"),
  },
];

// new Date creates a new Date object that you can modify or initialize with a different date
// while Date returns a string of the current date/time, ignoring its arguments.

const activities2 = [
  { title: "Hiking", date: Date() },
  { title: "Shopping", date: Date() },
  { title: "Trekking", date: Date() },
  { title: "I am the top", date: Date() },
  { title: "Bottom of Hiking", date: Date() },
  { title: "I am at the bottom", date: Date() },
];

const sortedActivities = activities.sort((a, b) => b.date - a.date);
const sortDate = dates.sort((a, b) => b.date - a.date);
const sortedActivities2 = activities2.sort((a, b) => b.date - a.date);

console.log(sortedActivities);
console.log(sortDate);
console.log(sortedActivities2);
