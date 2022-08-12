import Component from '../core/Component.js';

class TodoFilter extends Component {
  render() {
    const { todoFilter, currentTodoFilterId } = this.props;

    // prettier-ignore
    return `
      <ul class="todo-filter">
        ${todoFilter.map((filter, i) =>
          `<li data-filter-id=${i} class="${i === currentTodoFilterId ? 'selected' : ''}">${filter}</li>`
        ).join('')}
      </ul>`;
  }

  addEventListener() {
    const { changeCurrentFilter } = this.props;
    return [{ type: 'click', selector: '.todo-filter > li', handler: changeCurrentFilter }];
  }
}

export default TodoFilter;
