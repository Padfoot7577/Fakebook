import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  body: {
    marginLeft: 100,
    marginRight: 100
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  };

  render () {
    return (
        <div className={this.props.classes.body}>
          <h1>User's id is {this.props.id} </h1>
          <div>User's email is {this.props.email}</div>
          <img src={this.props.gravatar_link} />
        </div>
    )
  }
}

export default withStyles(styles)(UserProfile);
