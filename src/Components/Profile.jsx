import React, { Component } from "react";
import { Icon, Button, Card, Image} from "semantic-ui-react";

export default class Profile extends Component {
  render() {
    return (
      
      <Card>
      <Image src='/images/avatar/large/matthew.png' />
      <Card.Content textAlign="center">
        <Card.Header className="profileHeader">Welcome {this.props.name}!</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2018</span>
        </Card.Meta>
        <Card.Description>{this.props.about}Bio goes here</Card.Description>
      </Card.Content>
      <Card.Content extra>
      
          <Icon name='chess king' />
          Super User
        
      </Card.Content>
    </Card>
          
       
          
       
      
    );
  }
}
