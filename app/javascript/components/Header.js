import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FaceIcon from '@material-ui/icons/Face';
import LoginIcon from '@material-ui/icons/MoodBad';


class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.head}>
        <a href="/home/index">
        <div className={this.props.classes.iconContainer}>
          <ThumbDownIcon className={this.props.classes.icon}/>
        </div>
        <div className={this.props.classes.headTitle}>Fakebook</div>
        </a>
        {
          this.props.id ?
            <a href={"/users/" + this.props.id}>
            <div className={this.props.classes.iconContainerRight}>
              <div className={this.props.classes.loginInfo}>{this.props.name}</div>
              <FaceIcon className={this.props.classes.icon}/>
            </div>
            </a> :
            <a href="/login">
            <div
              className={this.props.classes.iconContainerRight}>
              <div className={this.props.classes.loginInfo}>Login</div>
              <LoginIcon className={this.props.classes.icon}/>
            </div>
            </a>
        }

      </div>
    );
  }
}

const styles = {
  head: {
    position: "fixed",
    backgroundColor: "#3B5998",
    left: 0,
    top: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100vw",
    verticalAlign: "top",
  },
  headTitle: {
    display: "inline-block",
    color: "#FFFFFF",
    verticalAlign: "top",
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    margin: 0,
    padding: 20,
  },
  loginInfo: {
    display: "inline-block",
    color: "#FFFFFF",
    verticalAlign: "top",
    fontFamily: "Helvetica Neue",
    fontSize: 18,
    paddingTop: 5,
    paddingRight: 10
  },
  iconContainer: {
    display: "inline-block",
    margin:0,
    padding: 20,
    textAlign: "top",
    paddingLeft: 100,
    paddingRight: 0,
    paddingBottom: 15
  },
  iconContainerRight: {
    display: "inline-block",
    margin:0,
    padding: 20,
    textAlign: "top",
    paddingRight: 144,
    paddingBottom: 15,
    float: "right"
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 30,
  }
};

export default withStyles(styles)(Header);



