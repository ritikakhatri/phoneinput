import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IntlTelInputApp from './components/IntlTelInputApp'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      tel: ''
    }
  }
    
  handler = (status, value, countryData, number, id)=>{
    this.setState(() => {
      return {tel: number}
    });
    console.log(status, value, countryData, number, id)
  }

  render() {
    return (
      <div className="App">
          <IntlTelInputApp containerClassName="intl-tel-input"
  inputClassName="form-control" onPhoneNumberChange={this.handler}/>

      <p>tel no : {this.state.tel}</p>
      </div>
    );
  }
}

export default App;
