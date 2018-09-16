import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  body: {
    marginTop: 40,
    marginLeft: 100,
    marginRight: 100
  },
  cardContent: {
    margin: 20,
    fontFamily: "Helvetica",
  },
  card: {
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "bottom",
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
    left: "60vw"
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
    height: 30
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
  },
  addButton: {
    background:'#e0e2e5',
    marginTop: 120
  }
};

class GreetUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchedString: ""}
  };

  setSearchString = (event) => {
    this.setState ({searchedString: event.target.value});
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
            onChange={this.setSearchString}
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
            {this.props.user.hateObjects
              .filter(hateObject => containsSequence(hateObject.name, this.state.searchedString))
              .map((hateObject) => (
              <Card key={hateObject.id} className={this.props.classes.card}>
                <div className={this.props.classes.cardContent}>{hateObject.name}</div>
              </Card>))}

            {
              this.state.searchedString && <Card className={this.props.classes.card}>
                <Button variant="fab" color="secondary" aria-label="Add" className={this.props.classes.addButton}>
                  <AddIcon />
                </Button>
              </Card>
            }

          </div>

        </div>
      </div>
    );
  }
}

const containsSequence = (checkString, searchSequence) => (checkString.indexOf(searchSequence) !== -1);

export default withStyles(styles)(GreetUser);

