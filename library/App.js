import Component from './core/Component.js';
import { TodoInput, TodoList, TodoFilter } from './components/index.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 3, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'HTML', completed: false },
      ],
      todoFilter: ['All', 'Completed', 'Active'],
      currentTodoFilterId: 0,
    };
  }

  render() {
    const todoInput = new TodoInput({
      addTodo: this.addTodo.bind(this),
    }).render();

    const todoList = new TodoList({
      ...this.state,
      toggleCompletedTodo: this.toggleCompletedTodo.bind(this),
      removeTodo: this.removeTodo.bind(this),
    }).render();

    const todoFilter = new TodoFilter({
      ...this.state,
      changeCurrentFilter: this.changeCurrentFilter.bind(this),
    }).render();

    return `
      ${todoInput}
      ${todoList}
      ${todoFilter}
    `;
  }

  get generateNextId() {
    return Math.max(...this.state.todos.map(todo => todo.id), 0) + 1;
  }

  addTodo(e) {
    if (e.key !== 'Enter') return;
    const content = e.target.value;
    e.target.value = '';
    const todos = [{ id: this.generateNextId, content, completed: false }, ...this.state.todos];
    this.setState({ todos });
  }

  removeTodo(e) {
    const id = +e.target.closest('li').id;
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  toggleCompletedTodo(e) {
    const id = +e.target.closest('li').id;
    const todos = this.state.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    this.setState({ todos });
  }

  changeCurrentFilter(e) {
    const currentTodoFilterId = +e.target.dataset.filterId;
    this.setState({ currentTodoFilterId });
  }
}

export default App;
