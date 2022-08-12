import Component from '../core/Component.js';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return `
      <li id=${todo.id}>
        <label class="${todo.completed ? 'completed' : ''}" >
          <input type="checkbox" class="toggle-completed" ${todo.completed ? 'checked' : ''}>
          ${todo.content}
        </label>
        <button class="remove">X</button>
      </li>`;
  }

  addEventListener() {
    const { toggleCompletedTodo, removeTodo } = this.props;

    return [
      { type: 'change', selector: '.toggle-completed', handler: toggleCompletedTodo },
      { type: 'click', selector: '.remove', handler: removeTodo },
    ];
  }
}

export default TodoItem;
