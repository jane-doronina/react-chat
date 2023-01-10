import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectChannel, setMessages } from "../actions"

class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return(
      <div className='channels'>
        <h1>Redux Chat</h1>
        <ul className="channel-list">
        {this.props.channels.map((channel, i) => <li key={i} className={channel === this.props.selectedChannel ? "active" : ""} onClick={() => this.handleClick(channel)} role="presentation">#{channel}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel: selectChannel,
      setMessages: setMessages },
    dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
