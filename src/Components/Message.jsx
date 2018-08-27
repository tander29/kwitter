import React, { Component } from 'react';

export default class Message extends Component {

    test = () => {
        console.log("hi taylr")
    }
    render() {
        return (
            <article>
                <div className="displayName">Displayname</div>
                <div className="message">Text from the fetch backend will go here</div>

                <div className="timePosted">Time posted here</div>
                <div className="numberOfLikes">Likes: </div >

                <footer>
                    <label>Label that Like button, or make it a button?</label>
                    <input type="checkbox" />

                    <button onClick={this.props.getMessageID}>Delete this post if I am the user</button>
                </footer>
            </article >

        )
    }
}