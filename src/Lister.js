import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

let id = 0
export class ListerState {
  @observable list = [];

  @action.bound
  add(text) {
    this.list.push({
      text,
      id: id++,
    })
  }
}

@observer
class Lister extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      error: null,
    }
  }

  onClick = () => {
    const text = this.textInput.current.value
    if (!text.length) {
      this.setState({ error: 'Please, enter text' })
      return
    }

    this.props.state.add(text)
    this.textInput.current.value = ''
    this.setState({ error: null })
  }

  render() {
    const { state } = this.props;
    return (
      <p>
        <button onClick={this.onClick}>
          add item
        </button>
        {this.state.error && (<p>{this.state.error}</p>)}
        <p>
          <input ref={this.textInput}/>
        </p>
        {state.list.map(item => (<p key={`item-${item.id}`}>{item.text}</p>))}
      </p>
    )
  }
}

export default Lister
