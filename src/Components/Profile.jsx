import React, { Component } from "react";
import { Icon, Card, Image } from "semantic-ui-react";
import "../App.css";
import sloth_sunglasses_adjusted from '../images/sloth_sunglasses_adjusted.jpg';
import { connect } from "react-redux";
import { getUser } from '../Redux/Actions'

class Profile extends Component {

  componentDidMount() {
    console.log(this.props.about)
  }
  render() {
    return (

      <Card style={{ padding: '1vh' }}>
        <Image src={sloth_sunglasses_adjusted} />
        <Card.Content textAlign="center" style={{ marginTop: '1vh' }} >
          <Card.Header className="profileHeader">Welcome {this.props.name}!</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2018</span>
          </Card.Meta>
          <Card.Description>Bio goes here</Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Icon name='chess king' />
          Super User

      </Card.Content>
      </Card>





    );
  }
}


const mapStateToProps = state => {
  const userFilter = () => {
    let userInfo = state.users.filter(user =>
      user.id === state.profile.id
    )[0]

    return userInfo
  }
  return {
    logout: {
      success: state.success,
      message: state.message
    },
    userInfo: userFilter(),
    profile: state.profile
  }
};

function mapDispatchToProps(dispatch) {
  return {

    getUser: () => {
      dispatch(getUser());
    },
  }
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
export default Connect;