//add mapstatetodisatch function and connect for message items here

import React, { Component } from "react";
import { connect } from "react-redux";
import Message from './Message.jsx'
import { getMessages } from "../Redux/Actions";


class MessageBoard extends Component {

    componentDidMount() {
        this.props.getMessages()


    }

    homepageMessages = (messageInfo) => {

        // console.log("hi", messageInfo)
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
        return messageInfo.map(messages =>
            <Message
                key={messages.id}
                displayName={messages.displayName}
                text={messages.text}
                likes={messages.likes.length}
                time={messages.createdAt}
                id={messages.id}
                type="string">

            </Message>)


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
    return { messages: state.messages, profile: state.profile };
};

function mapDispatchToProps(dispatch) {
    return {
        getMessages: () => {
            dispatch(getMessages());
        },
    };
}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoard);
export default Connect;