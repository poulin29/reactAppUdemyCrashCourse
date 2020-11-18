import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            {name : "Max", age : 40},
            {name : "Manu", age : 20},
            {name : "Stephanie", age : 26}
        ],
        otherState: 'Some other value',
        showPersons: false
    }
    
    switchHandler = (newName) => {
        this.setState({
            persons : [
                {name : newName, age : 40},
                {name : "Manu", age : 20},
                {name : "Stephanie", age : 26}
            ]
        })
    }


    nameChangeHandler = (event) =>{
        this.setState({
            persons : [
                {name : "Max", age : 40},
                {name : event.target.value, age : 20},
                {name : "Stephanie", age : 26}
            ],
        })
    }

    togglePersonHandler = () => {
       const  doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow});
    }



    render(){
        const style = {
            backgroundColor: 'white',
            font : 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return(
            <div className = "App">
                <h1>Hi, I am React App</h1>
                <p>This is really working!</p>
                <button 
                style = {style}
                onClick = {this.togglePersonHandler}>SwitchName</button>
                { 
                this.state.showPersons === true ?
                <div>
                <Person
                 name={this.state.persons[0].name}
                 age = {this.state.persons[0].age}
                
                />

                <Person
                 name={this.state.persons[1].name}
                 age = {this.state.persons[1].age}
                 click = {this.switchHandler.bind(this, 'Max!')} 
                 changed={this.nameChangeHandler}>My Hobbies: Racing </Person>

                <Person
                 name={this.state.persons[2].name}
                 age = {this.state.persons[2].age}
                />
                </div> : null
                }

            </div>

        );
    }
}
export default App;