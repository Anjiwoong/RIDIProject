import Component from '../core/Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  render() {
    const { todos, currentTodoFilterId, toggleCompletedTodo, removeTodo } = this.props;

    /**
     * currentTodoFilterId === 0: All
     * currentTodoFilterId === 1: Completed
     * currentTodoFilterId === 2: Active
     */
    const _todos = todos
      .filter(todo => (currentTodoFilterId === 1 ? todo.completed : currentTodoFilterId === 2 ? !todo.completed : true))
      .map(todo => new TodoItem({ todo, toggleCompletedTodo, removeTodo }).render())
      .join('');

    return `<ul class="todo-list">${_todos}</ul>`;
  }
}

export default TodoList;
