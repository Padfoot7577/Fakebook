import React from "react";
import { withStyles } from '@material-ui/core/styles';
import fakeBookRequest from 'components/FakeBookRequest';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  body: {
    marginLeft: 100,
    marginRight: 100
    }
  };

class AddAbominationForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className={this.props.classes.body}>
        <Dialog
          open={true}
          onClose={this.props.toggleOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Page</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your disliked thing here!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.toggleOpen} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.toggleOpen} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(AddAbominationForm);
