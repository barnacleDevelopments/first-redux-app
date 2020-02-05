import React from 'react';
import { connect } from "react-redux"
import {createStore, compose} from "redux"

const getMesages = messages => ({
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


const Store = createStore(messageReducer)



const App = () => {     
    return(         
    <div>            
      
       
    </div>     
);};
    

export default App;