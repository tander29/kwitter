import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          This is me
          <div> Show my most favorited message?</div>
          <div>This is where I would put a photo if I had one</div>
        </article>
      </React.Fragment>
    );
  }
}