import React, { Component } from "react";
import { Header, Icon, Button, Divider, Checkbox, Segment, Card } from "semantic-ui-react";

export default class Message extends Component {
  render() {
    return (
      <Card fluid centered>
      <article style={{padding:'1vh'}}>
        <div>
          <Icon name="user secret" size="large" />
          Displayname
        </div>
        
          <div style={{float:'Left'}}>Likes</div>
          <div style={{float:'Right'}}>TimeStamp</div>
        

        <Divider style={{marginBottom:'20px'}} />
        <div className="message" style={{marginBottom:'20px'}}>re here</div>

        
        

        <footer>
          <Checkbox toggle style={{float:'left', marginLeft:'10px'}} />

          <Button onClick={this.props.post} floated="right" style={{marginRight: '10px', marginBottom: '10px'}}>
            Delete
          </Button>
        </footer>
      </article>
      </Card>
    );
  }
}
