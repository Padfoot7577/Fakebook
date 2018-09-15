import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const styles = {
  head: {
    backgroundColor: "#3B5998",
    border: 0,
    margin: 0,
    padding: 0,
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
  iconContainer: {
    display: "inline-block",
    margin:0,
    padding: 20,
    textAlign: "top",
    paddingLeft: 100,
    paddingRight: 0,
    paddingBottom: 15
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 30,
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.head}>
        <div className={this.props.classes.iconContainer}>
          <ThumbDownIcon className={this.props.classes.icon}/>
        </div>
        <div className={this.props.classes.headTitle}>Fakebook</div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);