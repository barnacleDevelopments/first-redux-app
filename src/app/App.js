import {Provider} from "react-redux"

import React from 'react';

import { connect } from "react-redux"

import {createStore} from "redux"

import Presentational from "../components/Presentational"

const ADD = "GET_MESSAGES"

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD :
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = createStore(messageReducer)

  const mapStateToProps = (state) => {
    return {messages: state}
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message))
      }
    }
  };
  
  const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);


const App = ()=> { 
    
    return(         
    <div className="app">    
         <h1>Welcome to React Redux</h1>        
         <Provider store={store}>
            <Container />
          </Provider>
    </div>     
    );
};
    

export default App;