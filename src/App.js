import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <br/>
       
       <TextBox />
       
       <Counter />
      </div>
    );
  }
}

var data={
  name: ["Mukund", "Ishan"],
  School: ["jnv", "dps"]
};

class Button extends Component{
  render(){
    return(<div>
      <button type="button" className="btn btn-info" onClick={this.props.buttonClick}>Basic</button>
      <Test data={data} />
      </div>
    )
  }
}

class Test extends Component{
  render(){
    return(
      <div className="list-group">
       
        <h3>{this.props.data.name.map(function(name, i){
          return <Name key ={i} name={name}/>
          })}</h3>
      </div>
      
    )
  }
}


class TextBox extends Component{
  constructor(props){
    super(props);

    this.state = {value: "", mydata: ""}
    this.handler = this.handler.bind(this)
    this.updateState = this.updateState.bind(this)
  }
  
  handler(e){
    this.setState({value: e.target.value})
  }

  updateState(){
    data.name.push(this.state.value);
    console.log(data.name.length)
    
    this.setState({mydata: this.state.value})
  }
  
  render(){
    return(
      <div>
        <input type="text" onChange={this.handler}/>
        <Button myValue = {this.state.mydata} buttonClick = {this.updateState} />
          
      </div>
    )
  }
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.state ={counter: 1}
    setInterval(function(){
      if(this.state.counter<30){
      this.setState({counter: this.state.counter + 1});
      }
    }.bind(this), 1000);
       
  }
  render(){
    return(      
      <h3>{this.state.counter}</h3>
      
    )
  }
}

class Name extends Component{
  render(){
    return( 
      <a href="#" className="list-group-item">
        {this.props.name}
      </a>
    )
  }
}

export default App;
