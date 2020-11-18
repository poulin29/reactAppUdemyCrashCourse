import React, { Component  } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component  {
  state = {
    username : 'supermax'
  }
   
  usernameChangeHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }
  

  render () {
    return (
     <div className = "App">
       <UserInput changed={this.usernameChangeHandler}
       currentName = {this.state.username}
       />
       <UserOutput userName = {this.state.username}/>
       <UserOutput userName = {this.state.username}/>
       <UserOutput userName = 'Max'/>
     </div>
   );
    //return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'Does this work'));
  }
}


export default App;