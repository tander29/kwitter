import React,{Component} from 'react';
import {Container} from 'semantic-ui-react'
import Message from './Message.jsx'

class Messageboard extends React.Component {


    render() {
        return(
         <React.Fragment>
            <Container>
                <Message getMessages={this.props.getMessages} getMessageID={this.props.getMessageID} user={this.props.getUser}/>
                
            </Container>
         </React.Fragment>
        )
    }

}

export default Messageboard;