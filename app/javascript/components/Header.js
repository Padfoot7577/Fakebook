import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const styles = {
  head: {
    backgroundColor: "#3B5998",
    border: 0,
    margin: 0,
    padding: 0
  },
  headTitle: {
    color: "#FFFFFF",
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    padding: 20,
    paddingLeft: 100
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.head}>
        <ThumbDownIcon />
        <div className={this.props.classes.headTitle}>Fakebook</div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);