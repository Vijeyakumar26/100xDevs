/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/
class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
  }

  remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          this.todos.splice(indexOfTodo, 1);
      }
  }

  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      }
  }

  getAll() {
      return this.todos;
  }

  get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          return this.todos[indexOfTodo];
      }
      return null;
  }

  clear() {
      this.todos = [];
  }
}

// Example usage
const myTodoList = new Todo();
myTodoList.add("Study for 1 Hour");
myTodoList.add("Complete Assignment");
myTodoList.add("Buy Tomatoes");

console.log("All todos:", myTodoList.getAll());

myTodoList.update(1, "Finished coding assignment");
console.log("Updated todo at index 1:", myTodoList.get(1));

myTodoList.remove(0);
console.log("Remaining todos:", myTodoList.getAll());

myTodoList.clear();
console.log("Cleared todos:", myTodoList.getAll());

module.exports = Todo;
