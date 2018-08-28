import React, { Component } from "react";
import { Header, Icon, Button, Divider, Checkbox, Segment, Card, Container, Grid } from "semantic-ui-react";

export default class Message extends Component {
  render() {
    return (
      <Card fluid centered>
      <article style={{padding:'2vh'}}>
        <div style={{paddingBottom:'1vh'}}>
          <Icon name="user secret" size="large" />
          Displayname
        </div>
        
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">Like</Grid.Column>
              <Grid.Column textAlign="right">TimeStamp</Grid.Column>
            </Grid.Row>
          </Grid>
        

        <Divider style={{marginBottom:'20px'}} />
        <div className="message" style={{marginBottom:'20px'}}>Someone help me!!!I'm stuck in the computer and this app is the only way I have to communicate.</div>

        
        

        <footer>
          <Checkbox toggle style={{float:'left'}} />

          <Button onClick={this.props.post} floated="right">
            Delete
          </Button>
        </footer>
      </article>
      </Card>
    );
  }
}
