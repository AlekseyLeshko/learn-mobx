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
  minus() {
    this.count--;
  }
}

const Counter = observer(({ appState }) => (
  <React.Fragment>
    <button onClick={appState.reset}>Counter: {appState.count}</button>
    <button onClick={appState.add}>++</button>
    <button onClick={appState.minus}>--</button>
  </React.Fragment>
));

export default Counter
