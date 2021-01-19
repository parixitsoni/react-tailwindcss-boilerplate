import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment,decrement} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
    <hr/>
    {/* <h1>counter{counter}</h1> */}
    {/* <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button> */}
    {/* {isLogged ? <p>Valuable information</p>: ''} */}
  </div>
     );
  }
}
 
const mapStateToProps = state => {
  return{
    counter:state.counter,
    // isLogged:state.isLogged
  }
}

export default connect(mapStateToProps)(App);