import React, { Component } from 'react'

export default class Counter extends Component {
  state = { 
      count: 0,
    };
  
  counter = () =>{
    this.setState((prevState) => {
      return { 
        count: prevState.count + 1 
      };
    })
  }

  componentDidMount() {
    // EL componente se montó con éxito
    this.timer = setInterval(this.counter, 100);
    console.log('Component DID MOUNT.');
  }

  componentDidUpdate(prevProps, prevState) {
    // EL componente se actualizó con éxito
    console.log('Component Counter UPDATED from: ', prevState.count);
  }

  componentWillUnmount() {
    // El componente se va del DOM
    console.log("======== Component COUNTER is UNMOUNTED! ========");
    clearInterval(this.timer); // !!!
  }

  

  render() {
    console.log('I am in the RENDER of the Counter.');
    return (<div>
      <h1>{this.state.count}</h1>
    </div>)
  }
}
