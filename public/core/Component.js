class Component {
  constructor(props) {
    this.props = props;
    this.$target = props.$target;

    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.onMount();
  }

  onMount() {}

  /** @abstract */
  template() {}
}

export default Component;
