import React from "react";
import { Image, Container } from "semantic-ui-react";


class CustomHeader extends React.Component {
  render() {
    return (
      <container>
      <img 
      className="banner"
      src={require("../images/kwitter_logo.png")}
      style={{backgroundColor: 'black'}}
      
      />
      </container>
      
    );
  }
}

export default CustomHeader;
