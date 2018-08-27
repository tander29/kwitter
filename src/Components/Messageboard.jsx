import Message from './Message.jsx'
import React, {Component} from 'react'


export class Messageboard extends React.Component{

    render(){
    return(


    <React.Fragment>
        <Message getMessages={this.props.getMessages} getMessageID={this.props.getMessageID} user={this.props.getUser}></Message>
    </React.Fragment>   
    )
}
}