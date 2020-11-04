// const React = require('react')
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //   }
  // old way of doing scope biding in react
  // this.MinusOne = this.MinusOne.bind(this)
  // }
  // // life cycle:
  // componentDidMount() {
  //   console.log('11 Component Did Mount')
  //   this.setState({
  //     name: "Mr. Robot",
  //     count: 0,
  //   })
  // }

  state = {
    name: "",
    count: 0,
  }

  AddOne() {
    // way 2, use previous state: remember the previous state
    this.setState((prevState) => {
      // console.log(prevState)
      return {
        count: prevState.count + 1
      }
    })
  }

  MinusOne() {
    this.setState({
      count: this.state.count - 1
    })
  }

  Reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 10, fontWeight: "bold" }}>
        Good Afternoon {this.state.name}

        <div style={styles.buttonDivStyle}>
          <span>{this.state.count}</span>
          <button
            onClick={() => {
              this.AddOne()
            }}
            className="plus-button-style">
            +
          </button>
          <button
           /* <button onClick={this.MinusOne.bind(this)}>-</button> old way of doing scope binding in react */
            onClick={() => {
              console.log('Clicked Minus')
              this.MinusOne()
            }}
            className="plus-button-style"
          >
            -
          </button>
          <button class="plus-button-style" onClick={() => {
            this.Reset()
          }}>reset</button>
        </div>
      </div>
    )
  }
}

const styles = {
  buttonDivStyle: {
    marginTop: 10,
  }
}

export default App;

