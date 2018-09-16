import React from "react";
import { withStyles } from '@material-ui/core/styles';
import fakebookRequest from 'components/FakebookRequest';
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
    },
  subtitleLine: {
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 24,
    color: "#605f45"
  }
  };

class AddAbominationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.defaultValue,
      description: ""
    }
  };

  submitAbominationInfo = () => {
    fakebookRequest.post('/abominations', {'user_id':this.props.userID ,'name': this.state.name})
      .then((res1) => {
        console.log(res1);
        if (!res1.data.error) {
          fakebookRequest.get('/abominations/list_all').then((res2) => {
            console.log('res2');
            this.props.callBack(res2.data);
          });
        }
      })
      .catch((error) => console.error(error));
    this.props.toggleOpen();
  };

  updateName = (event) => {
    this.setState({name: event.target.value})
  };

  updateDescription = (event) => {
    this.setState({description: event.target.value})
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
              value = {this.state.name}
              defaultValue={this.props.defaultValue}
              onChange={this.updateName}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Why do you hate it?"
              type="textarea"
              value = {this.state.description}
              onChange={this.updateDescription}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.toggleOpen} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitAbominationInfo} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(AddAbominationForm);
