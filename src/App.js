import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage, getMessageID} from './Redux/Actions.jsx'
import Messageboard from './Components/Messageboard'


// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Messageboard getMessageID={this.props.getMessageID}/>
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
    
    login: () => { dispatch(login()) },
    register: () => { dispatch(register()) },
    newPost: () => { dispatch(newPost()) },
    like: () => { dispatch(like()) },
    deleteMessage: () => { dispatch(deleteMessage()) },
  })
}


export const Connect = connect(mapStateToProps, mapDispatchToProps)(App)
export default Connect;

