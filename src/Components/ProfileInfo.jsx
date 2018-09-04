import React, { Component } from "react";
import { Icon, Button, Divider, Card, Label, Image, Modal, TextArea } from "semantic-ui-react"

export default class ProfileInfo extends Component {
 render() {
 return (
<Card fluid>
    <Image src='' />
    <Card.Content>
      <Card.Header>Display Name</Card.Header>
      <Card.Meta>
        <span className='date'>Date Created</span>
      </Card.Meta>
      <Card.Description>Bio</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Number of messages
      </a>
    </Card.Content>
    <Modal trigger={<Button>Bio</Button>}> 
            <TextArea placeholder="Update Bio Information"></TextArea>
        </Modal>
        <Modal trigger={<Button>Change Display Name</Button>}> 
        <TextArea placeholder="New Display Name"></TextArea>
        </Modal>
        <Modal trigger={<Button>Change Password</Button>}> 
        <TextArea placeholder="New Password"></TextArea>
        </Modal>
        <Button>Delete Profile</Button> 
            
       
  </Card>

 )}}


