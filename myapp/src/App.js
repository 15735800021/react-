import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

const reducer = (state = 10,action) =>{
  switch (action.type){
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

class App extends Component {
  constructor(){
    super();
    this.store = createStore(reducer);
    this.store.subscribe(()=>{
      console.log(this.store.getState());
      this.setState({
        value: this.store.getState(),
      })
    })
  }

  add = () =>{
    this.store.dispatch({
      type:"ADD",
    })
  }

  minus = () => {
    this.store.dispatch({
      type:'MINUS',
    })
  }

  nothing = () => {
    this.store.dispatch({
      type: 'Nothing',
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.store.getState()}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.nothing}>Nothing</button>
      </div>
    );
  }
}

export default App;
