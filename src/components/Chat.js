import React, { Component } from 'react';
import {io} from 'socket.io-client'
import {connect} from 'react-redux'
import '../chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: '',
      showChat : true
    };
    this.socket = io.connect('http://codeial.codingninjas.com:5000');
    this.userEmail = props.user.email;
    console.log('user~~~~~~~~~~' , props.user.email);

    if(this.userEmail){
      this.setupConnection();
    }
  }

  setupConnection=()=>{

    const socketConnection = this.socket();
    const self = this;

    socketConnection.on('connect' , ()=>{
      console.log("Connectes Socket!");
      
      socketConnection.emit('join-room', {
        user_email : this.userEmail ,
        chatroom : 'codeial'
      });

      socketConnection.on('user-join' , (data)=> {
        console.log('new user joined !' , data);

      }) ;


    });

    socketConnection.on('receive-message' , (data)=>{
      console.log( 'message',data);
      const {messages} = self.state;
      let messageObject = {};
      messageObject.content = data.message;

      if(data.user_email === self.userEmail){
        messageObject.self = true;
      }

      self.setState({
        messages : [...messages ,messageObject]
      })
    })
  }

  handleResizeChat=()=>{
    const {showChat} = this.state;
    this.setState({
      showChat : !showChat
    })
  }

  render() {
    const { typedMessage, messages ,showChat} = this.state;

    return (
      <div className={`chat-container`}>
        <div className="chat-header">
          Chat
          <img
            src="https://image.flaticon.com/icons/png/512/4909/4909893.png"
            alt="MinusChat"
            height={17}
            onClick = {this.handleResizeChat}
          />
        </div>

        <div className={`chat-content-wrapper  ${showChat?null : 'hideChat'}`}>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                messages.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <textarea
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Send</button>
        </div>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    user : state.auth
  }
}

export default connect(mapStateToProps)(Chat);
