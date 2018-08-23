import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage, fetchMessages } from './Redux/Actions.jsx'
import Messageboard from './Components/Messageboard'


// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    console.log('this.props',this.props.fetchMessages)
    return (
      <div className="App">
        <Messageboard getMessages={this.props.fetchMessages}/>
        suck my balls kyyyyyllle
      </div >
    );
  }
}



const mapStateToProps = (state) => {
  return { messages: state.messages }
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchMessages: () => {dispatch(fetchMessages())},
    login: () => { dispatch(login()) },
    register: () => { dispatch(register()) },
    newPost: () => { dispatch(newPost()) },
    like: () => { dispatch(like()) },
    deleteMessage: () => { dispatch(deleteMessage()) },
  })
}


export const Connect = connect(mapStateToProps, mapDispatchToProps)(App)
export default Connect;

