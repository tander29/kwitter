import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getLogout,

} from "../Redux/Actions";

class NoPagePath extends Component {

    state = { text1: "" }

    componentDidMount() {
        setTimeout(this.first, 2000)

    }

    first = () => {
        this.setState({ text1: "Beep boop beep beep Boop Calculating!" })
        setTimeout(this.second, 2000)
    }

    second = () => {
        this.setState({ text2: "This page doesn't seem to exist or experiencing difficulties!" })
        setTimeout(this.third, 3000)
    }

    third = () => {
        this.setState({ text3: "Sending you to the login screen!!1!!" })
        setTimeout(this.props.getLogout, 3000)
    }

    render() {
        return (
            <React.Fragment>
                <h2>Beep boop beep beep Boop Calculating!</h2>
                <h2>{this.state.text1}</h2>
                <h2>{this.state.text2}</h2>
                <h1>{this.state.text3}</h1>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

    return { messages: state.messages, profile: state.profile, users: state.users };
};

function mapDispatchToProps(dispatch) {
    return {

        getLogout: () => {
            dispatch(getLogout());
        }
    };
}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoPagePath);
export default Connect;