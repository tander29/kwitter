import React, { Component } from "react";
import { Icon, Button, Divider, Checkbox, Card, Grid, Label } from "semantic-ui-react";
import { like, unlike } from "../Redux/Actions"
import { connect } from "react-redux";

export class Message extends Component {
  render() {
    return (
      <Card fluid centered>
        <article style={{ padding: '2vh' }}>
          <div style={{ paddingBottom: '1vh' }}>
            <Icon name="user secret" size="large" />
            Displayname {this.props.id}
          </div>

          <Grid>
            <Grid.Row columns={1}>
             
              <Grid.Column textAlign="center">{this.props.time}</Grid.Column>
            </Grid.Row>
          </Grid>


          <Divider style={{ marginBottom: '20px' }} />
          <div className="message" style={{ marginBottom: '20px' }}>{this.props.text}</div>




          <footer>
          <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, content: this.props.likes }}
            labelPosition='right'
            style={{ float: 'left' }} 
          />

            <Button onClick={this.props.post} floated="right">
              Delete
            </Button>
          </footer>
        </article>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages, profile: state.profile };
};

function mapDispatchToProps(dispatch) {
  return {
    like: (username, messageId) => {
      dispatch(like(username, messageId));
    },
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
export default Connect;
