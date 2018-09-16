import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fakeBookRequest from 'components/FakeBookRequest';

const styles = {
  body: {
    marginLeft: 100,
    marginRight: 100
    }
  }
};

class AddAbominationForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.body}>
        <div>text</div>
      </div>
    )
  }
}

export default withStyles(styles)(AddAbominationForm);
