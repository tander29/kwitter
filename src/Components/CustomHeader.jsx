import React from "react";
import { Image, Container } from "semantic-ui-react";
import kwitter_logo from '../images/kwitter_logo.png';


class CustomHeader extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'black' }}>
      <Image src={ kwitter_logo } centered/>
      
      
      
      />
      </div>
      
    );
  }
}

export default CustomHeader;
