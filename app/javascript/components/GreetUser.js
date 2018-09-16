import React from "react";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SelfDefinedCard from "components/Card";
import AddAbominationForm from "components/AddAbomination";

const styles = {
  body: {
    marginTop: 100,
    marginLeft: 100,
    marginRight: 100
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
    width: '100%',
    height: 30
  },
  addButton: {
    background:'#e0e2e5',
    marginTop: 120
  }
};

class GreetUser extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchedString: "",
      creatingNew: false,
      all_abominations: this.props.all_abominations,

    };
  };

  setSearchString = (event) => {
    this.setState ({searchedString: event.target.value});
  };

  addNewAbominationUpdate = (newInfo) => {
    this.setState (({abominationList}) => {
      abominationList.unshift(newInfo);
      return {abominationList:abominationList, searchedString: ""}
    })
  };

  refreshAbominations = (new_abominations) => {
    this.setState({
      all_abominations: new_abominations ,
      searchedString: "",
    });
  };

  toggleCreatingNew = () => {
    this.setState(({creatingNew}) => ({creatingNew: !creatingNew}) );
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
            {this.state.all_abominations
              .filter(abomination => containsSequence(abomination.name, this.state.searchedString))
              .map((abomination) => (
                  <SelfDefinedCard key={abomination.id}
                                   userID={this.props.user.id}
                                   id={abomination.id}
                                   name={abomination.name}
                                   url={abomination.url}
                  />
              ))
            }

            {
              <Card className={this.props.classes.card}>
                <Button variant="fab" color="secondary" aria-label="Add"
                        className={this.props.classes.addButton}
                        onClick={this.toggleCreatingNew}
                >
                  <AddIcon />
                </Button>
              </Card>
            }

          </div>

        </div>
        {
          this.state.creatingNew && <AddAbominationForm toggleOpen={this.toggleCreatingNew}
                                                        defaultValue={this.state.searchedString}
                                                        callBack={this.refreshAbominations}
          />
        }

      </div>
    );
  }
}

const containsSequence = (checkString, searchSequence) => (checkString.indexOf(searchSequence) !== -1);

export default withStyles(styles)(GreetUser);
