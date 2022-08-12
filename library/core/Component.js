import { render, eventBuffer } from '../dom/index.js';

class Component {
  constructor(props) {
    this.props = props;
    this.keepEvents();
  }

  /**
   * @public
   * 컴포넌트의 state를 업데이트한다. state가 변경되면 컴포넌트는 re-rendering된다.
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    // if (this.state !== newState) this.state = newState;

    // console.log('[RE-RENDERING] state:', this.state);
    render(this.render()); // testTQlsdfsdfsdfsdf
  }

  /**
   * @private
   * 자식 클래스에서 정의된 addEventHandler 메서드([{type: string, selector: string, handler: e => void}] 반환)를 호출해 eventsBuffer.events 배열에 push한다.
   * 이벤트 중복 등록을 방지하기 위해 eventsBuffer.events 배열에 event type과 selector가 동일한 event가 이미 존재하면 push하지 않는다.
   */
  keepEvents() {
    // this.addEventListener === undefined ? events === undefined
    const events = this.addEventListener?.();
    if (!events) return;

    for (const event of events) {
      /**
       * event.selector === 'window' => 이벤트 핸들러는 window에 등록된다.
       * event.selector === null => 이벤트 핸들러는 root container에 등록된다.
       * 위와 같은 경우 이벤트 핸들러에 if 문을 삽입해 새롭게 생성할 필요가 없다.
       */
      if (event.selector === 'window' || event.selector === null) {
        eventBuffer.events = event;
        continue;
      }

      // eventsBuffer.events 배열에 event type과 selector가 동일한 event가 이미 존재하면 push하지 않는다.
      const same = eventBuffer.events.find(({ type, selector }) => type === event.type && selector === event.selector);

      if (same === undefined) {
        const { selector, handler } = event;

        // handler를 monkey patch한다.
        event.handler = e => {
          // e.target이 selector의 하위 요소일 수도 있다.
          if (e.target.matches(selector) || e.target.closest(selector)) handler(e);
        };

        eventBuffer.events = event;
      }
    }
  }

  /** @abstract */
  render() {
    throw new Error(`Component의 서브 클래스는 DOMString을 반환하는 'render' 메서드를 구현해야 합니다.`);
  }
}

export default Component;
