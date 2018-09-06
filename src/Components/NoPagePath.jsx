import React, { Component } from "react";

export default class NoPagePath extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Oh no!  This page doesn't seem to exist, please go back!</div>
            </React.Fragment>
        );
    }
}