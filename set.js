let A = [1, 2, 3];
let B = [2, 3, 4, 5];

// VERSION: 1
//let C = A.concat(B.filter( item => {return A.indexOf(item) < 0;} ));

// VERSION: 2
let C = [...new Set([...A, ...B])];

// result:
console.log(C);
