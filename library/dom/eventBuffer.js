const eventBuffer = {
  /**
   * 이벤트 핸들러를 일괄 등록하기 위해 컴포넌트의 addEventHandler 메소드가 반환하는
   * event 객체 베열([{type: string, selector: string, handler: e => void}])의 저장소다.
   * Component#keepEvents에 의해 저장되고 render 함수가 호출되면 bindEventHandler 함수에 의해 이벤트가 등록된다.
   * @type {[{type: string, selector: string, handler: e => void}]}
   */
  _eventsBuffer: [],
  get events() {
    return this._eventsBuffer;
  },
  set events(event) {
    this._eventsBuffer.push(event);
  },
};

export default eventBuffer;
