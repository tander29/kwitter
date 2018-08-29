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
        return (
            <React.Fragment>

                {this.props.messages.map(messages => <Message type="string"></Message>)}

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