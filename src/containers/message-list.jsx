import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setMessages } from "../actions";
import Message from "../components/message";
import MessageForm from "./message-form";

class MessageList extends React.Component {
  UNSAFE_componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    let messagesToDisplay;

    if(!this.props.messages || this.props.messages.length === 0 ) {
      messagesToDisplay = <p>No messages yet. Be the first to write!</p>
    } else {
      messagesToDisplay = this.props.messages.map((message, i) => <Message key={i} message={message} />)
    }
    return(
      <div className="message-list-container">
        <p className="message-list-channel">Channel #{this.props.selectedChannel}</p>
        <div className="messages-container" ref={(list) => { this.list = list; }}>
          {messagesToDisplay}
        </div>
        <MessageForm />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {setMessages: setMessages},
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
