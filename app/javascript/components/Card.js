import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "bottom",
    margin: 10,
    height: 300,
    width: 240
  },
  cardContent: {
    margin: 20,
    fontFamily: "Helvetica",
  },
};

class SelfDefinedCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Card className={this.props.classes.card} key={this.props.key}>
        <div className={this.props.classes.cardContent}>{this.props.name}</div>
      </Card>
    )
  }
}

export default withStyles(styles)(SelfDefinedCard);
