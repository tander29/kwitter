import React, { Component } from "react";
import  {like}  from '../Redux/Actions'
import {connect} from 'react-redux'
import { Icon, Button, Divider, Card, Grid} from "semantic-ui-react";


export class Message extends Component {
  
  render() {
    return (
      <Card fluid centered>
        <article style={{ padding: '2vh' }}>
          

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign='left'>
              <Icon name="user secret" size="large"/> 
            {this.props.displayName}
            {this.props.username}
            </Grid.Column>
              <Grid.Column textAlign="right" className="timestamp">{this.props.time}</Grid.Column>
            </Grid.Row>
          </Grid>
          



          <Divider style={{ marginBottom: '20px' }} />
          <div className="message" style={{ marginBottom: '20px' }}>{this.props.text}</div>




          <footer>
            <Button
              content='Like'
              toggle
              icon='heart'
              label={{ as: 'a', basic: true, content: this.props.likes }}
              labelPosition='right'
              size='tiny'
              style={{ float: 'left' }} 
              onClick={ () => this.props.like(this.props.id) }
            />

            <Button onClick={this.props.post} floated="right" size='tiny'>
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
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
export default Connect;
