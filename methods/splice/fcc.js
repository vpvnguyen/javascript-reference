// splice(start, deleteCount, ...addItems)

// from starting index, remove array elements
const dates = ["January", "February", "Monday", "Tuesday"];
const days = dates.splice(2);
console.log(dates); // [ 'January', 'February' ]
console.log(days); // ["Monday", "Tuesday"]

// from starting index, remove n count of array elements
const dates2 = ["January", "February", "Monday", "Tuesday"];
const days2 = dates2.splice(2, 1);
console.log(dates2); // [ 'January', 'February', 'Tuesday' ]
console.log(days2); // [ 'Monday' ]

// from starting index, remove n count of array elements and add array elements
const dates3 = ["January", "February", "Monday", "Tuesday", "May"];
const days3 = dates3.splice(2, 2, "March", "April");
console.log(dates3); // [ 'January', 'February', 'March', 'April', 'May' ]
console.log(days3); // [ 'Monday', 'Tuesday' ]

// add new array elements without removing any elements
const dates4 = ["January", "February", "Monday", "Tuesday"];
const addMonth = dates4.splice(2, 0, "March");
console.log(dates4); // [ 'January', 'February', 'March', 'Monday', 'Tuesday' ]
console.log(addMonth); // []
