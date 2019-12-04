import React, { Component } from 'react';

function App() {
  return (<Counter></Counter>);
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state);

    this.state = { count: 0 }
  }

  handlePlusButton() {
    console.log("clicked");
    console.log(this.state.count);

    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton() {
    console.log("clicked");
    console.log(this.state.count);

    this.setState({ count: this.state.count - 1 })
  }


  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={() => { this.handlePlusButton() }}>＋1</button>
        {/*このクラスのインスタンスのメソッドをコールして、そのメソッドの中でstateの値を＋1したいので、this.関数*/}
        <button onClick={() => { this.handleMinusButton() }}>-1</button>
      </React.Fragment>
    )
  }
}



export default App;
