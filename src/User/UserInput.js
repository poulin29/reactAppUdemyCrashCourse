import React  from 'react';


const userInput =(props)=> {
    const inputStyle = {
        border: '3px solid red'
    }
    return(
        <div>
            <input type ="text" style = {inputStyle}onChange = {props.changed} value = {props.currentName}/>
        </div>
    );
}

export default userInput;