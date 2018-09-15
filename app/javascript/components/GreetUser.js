import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginLeft: 100,
    marginRight: 100
  },
  cardContent: {
    margin: 20
  },
  card: {
    display: "inline-block",
    margin: 10,
    height: 300,
    width: 240
  },
  titleLine: {
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 24,
    color: "#605f45"
  }
};

class GreetUser extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.root}>
        <h1>User's Name is {this.props.user.name} </h1>
        <div className={this.props.classes.titleLine}>Things that you might hate</div>
        <div>
          {this.props.user.hateObjects.map((hateObject) => (
            <Card key={hateObject.id} className={this.props.classes.card}>
            <div className={this.props.classes.cardContent}>{hateObject.name}
            </div></Card>))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GreetUser);
