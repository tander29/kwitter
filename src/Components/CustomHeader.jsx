import React from "react";
import { Image, Container } from "semantic-ui-react";
import kwitter_logo from '../images/kwitter_logo.png';


class CustomHeader extends React.Component {
  render() {
    return (
      <Container className='headerNav' style={{ backgroundColor:'#05386B' }} fluid>
      <Image src={ kwitter_logo } size='medium' centered />
      
      </Container>
      
      
     
      
    );
  }
}

export default CustomHeader;
