import React from "react"
import { connect } from "react-redux"

class ListContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteMessage(e) {
    
    }

    render() {
    return (
         <ul className="list">
            {this.props.messages.map((message, idx) => {
                return (
                <li className="list-item" key={idx}>{message}<div onClick={this.deleteMessage}></div></li>
            )
            })}
        </ul>
    )
}
}

const mapStateToProps = (state) => {
    return {messages: state}
  };

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       deleteNewMessage: (message) => {
//         dispatch(deleteMessage(message))
//       }
//     }
//   };
  

export default connect(mapStateToProps, null)(ListContainer)