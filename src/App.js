import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    visible: true
  }

  switchCounter = () => {
    this.setState( (prevState) => {
      return {visible: !prevState.visible}
    })
  }

  render(){
    return (
    <div className="App">
      {this.state.visible && <Counter/>}
      <button onClick={this.switchCounter}>switch Counter</button>
    </div>
  );}
}

export default App;
