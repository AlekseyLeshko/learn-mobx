import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

export class AppState {
  @observable count = 0;

  @action.bound
  reset() {
    this.count = 0;
  }

  @action.bound
  add() {
    this.count++;
  }

  @action.bound
  add5() {
    this.count += 5;
  }

  @action.bound
  minus() {
    this.count--;
  }

  @action.bound
  minus5() {
    this.count -= 5;
  }
}

@observer
class Counter extends React.Component {
  render() {
    const { appState } = this.props;
    return (
      <React.Fragment>
        <button onClick={appState.minus5}>-5</button>
        <button onClick={appState.minus}>-1</button>
        <button onClick={appState.reset}>Counter: {appState.count}</button>
        <button onClick={appState.add}>+1</button>
        <button onClick={appState.add5}>+5</button>
      </React.Fragment>
    )
  }
}

export default Counter
