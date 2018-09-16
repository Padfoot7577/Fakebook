import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = {
  body: {
    marginTop: 30,
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
  subtitleLine: {
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 24,
    color: "#605f45"
  },
  searchBar: {
    position: "fixed",
    top: 22,
    left: '55%'
  },
  search: {
    position: 'relative',
    borderRadius: 3,
    backgroundColor: fade('#ffffff', 0.65),
    '&:hover': {
      backgroundColor: fade('#ffffff', 0.85),
    },
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    width: '100%'
  }
};

class GreetUser extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div>
        <div className={this.props.classes.searchBar}>
        <div className={this.props.classes.search}>
          <div className={this.props.classes.searchIcon}>
            <SearchIcon />
          </div>
          <Input
            placeholder="Search…"
            disableUnderline
            classes={{
              root: this.props.classes.inputRoot,
              input: this.props.classes.inputInput,
            }}
          />
        </div>
        </div>
        <div className={this.props.classes.body}>
          <div className={this.props.classes.subtitleLine}>Things that you might hate</div>
          <div>
            {this.props.user.hateObjects.map((hateObject) => (
              <Card key={hateObject.id} className={this.props.classes.card}>
              <div className={this.props.classes.cardContent}>{hateObject.name}
              </div></Card>))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GreetUser);
