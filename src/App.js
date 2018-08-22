import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage } from './Redux/Actions'



// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <div className="App">
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
export default App;

