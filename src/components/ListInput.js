import React from "react"

import { connect } from "react-redux"

import addMessage from "../redux/actions/add-message"

class ListInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }

    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage() {
      console.log(this.props.messages)
        this.props.submitNewMessage(this.state.input)
        this.setState({
          input: ""
        })
      }
     
    render() {
      return (
        <div className="input-field">
          <h2>Type in a new Message:</h2>
          <div className="input-container">
            <input value={this.state.input} onChange={this.handleChange}/><br/>
            <button onClick={this.submitMessage}>Submit</button>
          </div>
        </div>
      );
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message))
      }
    }
  };
  


  export default connect(null, mapDispatchToProps)(ListInput);