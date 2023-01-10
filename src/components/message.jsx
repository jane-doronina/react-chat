const Message = (props) => {
  return(
    <div className="message">
      <p className="author">{props.message.author} <span className="created_at">- {props.message.created_at}</span></p>
      <p className="content">{props.message.content}</p>
    </div>
  )

}

export default Message;
