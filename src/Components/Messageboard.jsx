//add mapstatetodisatch function and connect for message items here

import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Button, Divider, Checkbox, Card, Grid } from "semantic-ui-react";
import Message from './Message.jsx'

import {

    getMessages,
} from "../Redux/Actions";


class MessageBoard extends Component {

    componentDidMount() {
        this.props.getMessages()


    }

    render() {
        const messageInfo = this.props.messages
        return (
            <React.Fragment>

                {messageInfo.map(messages => <Message displayName={messages.displayName} text={messages.text} likes={messages.likes.length} time={messages.createdAt} id={messages.id} type="string"></Message>)
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