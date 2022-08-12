import Component from '../core/Component.js';

class TodoInput extends Component {
  render() {
    return `<input type="text" class="add" placeholder="Enter todo!" autofocus />`;
  }

  /**
   * 이벤트 핸들러 등록을 위해 [{type: string, selector: string, handler: e => void}] 타입의 배열을 반환한다.
   * - 이 메서드는 Component class의 keepEvents 메서드에 의해 호출되어 일시적 이벤트 저장소에 저장되었다가
   * dom/render 함수에 의해 root container에 위임되어 일괄적으로 이벤트 등록된다.
   * - selector 프로퍼티 값은 다음과 같은 의미를 같는다.
   *   - 'window' => 이벤트 핸들러는 window에 등록된다.
   *   - null => 이벤트 핸들러는 필터링 없이 root container에 등록된다.
   *   - css selector => 필터링을 위해 handler에 if (e.target.matches(selector) || e.target.closest(selector)) handler(e);를 삽입해 새롭게 생성한다.
   * @type {() => Array<{type: string, selector: string|'window'|null, handler: Function}>}
   */
  addEventListener() {
    const { addTodo } = this.props;
    return [{ type: 'keyup', selector: '.add', handler: addTodo }];
  }
}

export default TodoInput;
