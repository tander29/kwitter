//add mapstatetodisatch function and connect for message items here

import React, { Component } from "react";
import { connect } from "react-redux";
import Message from './Message.jsx'
import { getMessages, getUser } from "../Redux/Actions";


class MessageBoard extends Component {

    componentDidMount() {
        this.props.getMessages()
        this.props.getUsers()


    }

    homepageMessages = (messageInfo) => {

        let mountArray = []
        for (let i = 0; i < 5; i++) {
            let randomNumber = Math.floor(Math.random() * messageInfo.length)
            mountArray[i] = messageInfo[randomNumber]
        }
        return this.makeMessages(mountArray)
    }

    mainpageMessages = (messageInfo) => {
        return this.makeMessages(messageInfo)
    }

    makeMessages = (messageInfo) => {
        console.log("message info", messageInfo)

        return messageInfo.map(messages =>
            <Message
                key={messages.id}
                displayName={this.displayName(messages)}
                text={messages.text}
                likes={messages.likes.length}
                time={messages.createdAt}
                id={messages.id}
                type="string"
                isLiked={this.props.likes.some(messageId => messageId === messages.id)}
            >


            </Message>)


    }

    displayName = (message) => {
        if (this.props.users.length) {
            let desiredUser = this.props.users.filter(user => user.id === message.userId)
            console.log(desiredUser[0])
            return desiredUser[0].displayName ? desiredUser[0].displayName : "Sneaky"
        }

    }

    render() {
        const messageInfo = this.props.messages
        return (
            <React.Fragment>

                {messageInfo.length > 0 && this.props.location === "/"
                    ?
                    this.homepageMessages(messageInfo)
                    :
                    this.mainpageMessages(messageInfo)

                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { messages: state.messages, profile: state.profile, likes: state.likes, users: state.users };
};

function mapDispatchToProps(dispatch) {
    return {
        getMessages: () => {
            dispatch(getMessages())
        },
        getUsers: () => {
            dispatch(getUser());
        },

    };
}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoard);
export default Connect;