import React, { Component } from "react";
import { Icon, Button,Card, Image, Modal, TextArea } from "semantic-ui-react"
import {getUser} from '../Redux/Actions' 
import { connect } from "react-redux";


export class ProfileInfo extends Component {
 
 render() {
 return (


<Card fluid>
    <Image src='' />
    <Card.Content>
      <Card.Header>{this.props.displayName}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.createdAt}</span>
      </Card.Meta>
      <Card.Description>{this.props.about}</Card.Description>
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


 const mapStateToProps = state => {
  return { messages: state.messages, profile: state.profile,
            users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    
    getUser: () => {
      dispatch(getUser());
    }
    }
  }



const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);
export default Connect;