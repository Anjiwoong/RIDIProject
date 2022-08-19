class Component {
  constructor(props) {
    this.props = props;
    this.$target = props.$target;
    
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.onMount();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }
  
  onMount() {}

  /** @abstract */
  template() {
    throw new Error(`Component의 서브 클래스는 DOMString을 반환하는 'template' 메서드를 구현해야 합니다.`);
  }
}

export default Component;