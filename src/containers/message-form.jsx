import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createMessage } from "../actions";

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUsername, this.state.input)
    this.setState({
      input: ""
    })
  }

  render() {
    return(
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button type="submit">Send</button>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {createMessage: createMessage},
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.selectedChannel,
    currentUsername: state.currentUsername
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
