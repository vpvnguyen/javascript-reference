const str1 = 'Hello';
const str2 = 'World';

const greet = str1 => greet2 = str2 => `${str1}, ${str2}!`;

console.log(greet(str1)(str2));