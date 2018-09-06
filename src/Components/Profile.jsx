import React, { Component } from "react";
import { Icon, Button, Card, Image} from "semantic-ui-react";
import "../App.css";
import sloth_sunglasses_adjusted from '../images/sloth_sunglasses_adjusted.jpg';

export default class Profile extends Component {
  render() {
    return (
      
      <Card style={{padding:'1vh'}}>
      <Image src={sloth_sunglasses_adjusted} />
      <Card.Content textAlign="center" style={{marginTop:'1vh'}} >
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
