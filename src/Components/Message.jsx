import React, { Component } from "react";
import { Icon, Button, Divider, Checkbox, Card, Grid } from "semantic-ui-react";

export default class Message extends Component {
  render() {
    return (
      <Card fluid centered>
        <article style={{ padding: '2vh' }}>
          <div style={{ paddingBottom: '1vh' }}>
            <Icon name="user secret" size="large" />
            Displayname {this.props.id}
          </div>

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">Likes: {this.props.likes}</Grid.Column>
              <Grid.Column textAlign="right">{this.props.time}</Grid.Column>
            </Grid.Row>
          </Grid>


          <Divider style={{ marginBottom: '20px' }} />
          <div className="message" style={{ marginBottom: '20px' }}>{this.props.text}</div>




          <footer>
            <Checkbox toggle style={{ float: 'left' }} />

            <Button onClick={this.props.post} floated="right">
              Delete
          </Button>
          </footer>
        </article>
      </Card>
    );
  }
}
