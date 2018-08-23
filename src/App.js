import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage, getMessages } from './Redux/Actions'
import Message from './Components/Message'


// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>This is from APP</div>
        <Message getMessages={this.props.getMessages}></Message>
      </div >
    );
  }
}



const mapStateToProps = (state) => {
  return { messages: state.messages }
}

function mapDispatchToProps(dispatch) {
  return ({
    login: () => { dispatch(login()) },
    register: () => { dispatch(register()) },
    newPost: () => { dispatch(newPost()) },
    like: () => { dispatch(like()) },
    deleteMessage: () => { dispatch(deleteMessage()) },
    getMessages: () => { dispatch(getMessages()) },
  })
}


const Connect = connect(mapStateToProps, mapDispatchToProps)(App)
export default Connect;

