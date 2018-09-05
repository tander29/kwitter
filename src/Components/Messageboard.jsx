//add mapstatetodisatch function and connect for message items here

import React, { Component } from "react";
import { connect } from "react-redux";
import Message from './Message.jsx'
import { getMessages} from "../Redux/Actions";


class MessageBoard extends Component {

    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        const messageInfo = this.props.messages
        return (
            <React.Fragment>

                {messageInfo.map(message => 
                <Message
                    key={message.id}
                    displayName={message.displayName}
                    text={message.text}
                    likes={message.likes.length}
                    time={message.createdAt}
                    id={message.id}
                    type="string"
                    isLiked={this.props.likes.some(messageId => messageId === message.id) }
                    >
                </Message>)
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { messages: state.messages, profile: state.profile, likes: state.likes };
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