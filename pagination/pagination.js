const todos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
const currentPage = 1;
const todosPerPage = 3;

// Logic for displaying todos
const indexOfLastTodo = currentPage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
console.log(currentTodos); // ['a', 'b', 'c']

// Logic for displaying page numbers
// Math.ceil will round up
// Ex.: .95 = 1
// Ex.: -7.1 = -7
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
  pageNumbers.push(i);
}
console.log(pageNumbers); // [ 1, 2, 3, 4 ]
