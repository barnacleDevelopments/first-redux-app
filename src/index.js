import ReactDOM from "react-dom"

import {Provider} from "react-redux"


import React, {useState} from 'react';

import { connect } from "react-redux"

import {createStore, compose} from "redux"

const addMessage = messages => ({
    type: "GET_MESSAGES",
    messages: messages
})

const messageReducer = (state = [], action) => {
    switch(action.type) {
        case "GET-MESSAGES":
        return [...state, action.message]
        break
        default:
            return action.messages
    }
}

const mapStateToProps = (state) => {
    return { messages: state }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (newMessage) => {
         dispatch(addMessage(newMessage))
      }
    }
}

const Store = createStore(messageReducer)

const Presentational = () => {
      
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    

    function handleChange(event) {
      setInput(event.target.value);
    }
    function submitMessage() {
      const currentMessage = input;
      setMessages(messages.concat(currentMessage));
      setInput("")
    }

      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input
            value={input}
            onChange={handleChange}/><br/>
          <button onClick={submitMessage}>Submit</button>
          <ul>
            {messages.map( (message, idx) => {
                return (
                   <li key={idx}>{message}</li>
                )
              })
            }
          </ul>
        </div>
      );
  };


const Container = connect(mapStateToProps, mapDispatchToProps) (Presentational)


const App = () => {     
    return(         
    <div>            
        <Container />
    </div>     
);};
    


ReactDOM.render(
    <Provider store={Store}>
        <h1>Welcome to React Redux</h1>
      <App />
    </Provider>,
    document.getElementById("root")
)