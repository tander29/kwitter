import React, { Component } from "react";
import { like, unlike, getMessageID, deleteMessage } from '../Redux/Actions'
import { connect } from 'react-redux'
import { Icon, Button, Divider, Card, Grid, Popup } from "semantic-ui-react";


export class Message extends Component {

  state = { user: {}, numberOfKweets: "", peopleWhoLikedKweet: "" }


  timeConversion = (messageTime) => {
    let time = new Date(messageTime)
    return time.toLocaleString()
  }

  timeConversionDate = (messageTime) => {
    let time = new Date(messageTime)
    return time.toDateString()
  }

  removeMessage = (id) => {

    this.props.deleteMessage(id)

  }

  getSingleUserforPopUp = (userIdNumber) => {
    console.log(this.state)
    const currentUserArray = this.props.state.users.filter(message => message.id === userIdNumber)
    const currentUser = currentUserArray[0]

    const kweetsArray = this.props.state.messages.filter(message => message.userId === userIdNumber)
    console.log("kweet this", kweetsArray)
    this.setState({ user: currentUser ? currentUser : {}, numberOfKweets: kweetsArray.length ? kweetsArray.length : "0" })
  }

  render() {
    return (
      <Card style={{ backgroundColor: "#EDF5E1" }} fluid centered>
        <article style={{ padding: '2vh' }}>


          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign='left'>
                <Popup header={this.props.displayName}></Popup>
                <Popup

                  inverted
                  trigger={<Icon
                    onClick={() => this.getSingleUserforPopUp(this.props.message.userId)} name="user secret" size="large" />}
                  header={this.props.displayName}
                  content={this.state.user.createdAt ?
                    `
                  About-:${this.state.user.about}....  I joined kwitter on ${this.timeConversionDate(this.state.user.createdAt)}...
                  Since then I have kweeted ${this.state.numberOfKweets} time(s)!
                  `
                    : 'click for more info!'}
                />
                {this.props.displayName}
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
  return { messages: state.messages, profile: state.profile, state: state };
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
