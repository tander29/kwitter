import React, { Component } from "react";
import { like, unlike, getMessageID, deleteMessage } from '../Redux/Actions'
import { connect } from 'react-redux'
import { Icon, Button, Divider, Card, Grid } from "semantic-ui-react";


export class Message extends Component {

  timeConversion = (messageTime) => {
    let time = new Date(messageTime)
    return time.toLocaleString()
  }

  removeMessage = (id) => {

    this.props.deleteMessage(id)

  }

  render() {
    return (
      <Card style={{ backgroundColor: "#EDF5E1" }} fluid centered>
        <article style={{ padding: '2vh' }}>


          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign='left'>
                <Icon name="user secret" size="large" />
                {this.props.displayName}
                {this.props.username}
              </Grid.Column>
              <Grid.Column textAlign="right" className="timestamp">{this.timeConversion(this.props.time)}</Grid.Column>
            </Grid.Row>
          </Grid>




          <Divider style={{ marginBottom: '20px' }} />
          <div className="message wordwrap" style={{ marginBottom: '20px' }}>{this.props.text}</div>




          <footer>
            {(this.props.isLiked === true) ?
              <Button
                content='Like'
                icon='heart'
                label={{ as: 'a', basic: true, content: this.props.likes }}
                labelPosition='right'
                style={{ float: 'left' }}
                color='red'
                onClick={() => this.props.unlike(this.props.id)}
              />
              :
              <Button
                content='Like'
                icon='heart'
                label={{ as: 'a', basic: true, content: this.props.likes }}
                labelPosition='right'
                style={{ float: 'left' }}
                onClick={() => this.props.like(this.props.id)}
              />
            }

            <Button onClick={() => this.removeMessage(this.props.id)} floated="right" size='tiny'>
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
    like: (messageId) => {
      dispatch(like(messageId));
    },
    unlike: (messageId) => {
      dispatch(unlike(messageId))
    },
    getMessageID: (id) => {
      dispatch(getMessageID(id))
    },
    deleteMessage: (id) => {
      dispatch(deleteMessage(id))
    },
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
export default Connect;
