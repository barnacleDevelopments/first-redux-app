import React from "react"



class Presentational extends React.Component {
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
          <ul className="list">
          {this.props.messages.map((message, idx) => {
              return (
                 <li className="list-item" key={idx}>{message}</li>
              )
            })}
          </ul>
        </div>
      );
    }
  };

  export default Presentational