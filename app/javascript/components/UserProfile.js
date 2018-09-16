import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fakebookRequest from 'components/FakebookRequest';
import SelfDefinedCard from "./Card";

const styles = {
  body: {
    marginTop: 60,
    marginLeft: 100,
    marginRight: 100
  },
  profileImage: {
    display: "inline-block",
    margin: 30,
    marginTop: 40,
    width: 200,
    height: 200
  },
  basicInfo: {
    display: "inline-block",
    margin: 30,
    verticalAlign: "top"
  },
  name: {
    margin: 10,
    fontFamily: "Helvetica Neue",
    fontSize: 48,
    marginBottom: 20
  },
  secondaryInfo: {
    margin: 10,
    fontFamily: "Helvetica Neue",
    fontSize: 18
  },
  logoutButton: {
    background: "#3B5998",
    display: "block",
    marginTop: 20,
    marginLeft: 10
  },
  subtitleLine: {
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 24,
    color: "#605f45"
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  };

  render () {
    return (
        <div className={this.props.classes.body}>
          <img className={this.props.classes.profileImage} src={this.props.gravatar_link} />
          <div className={this.props.classes.basicInfo}>
            <div className={this.props.classes.name}>{this.props.name} </div>
            <div className={this.props.classes.secondaryInfo}>User id:  {this.props.id} </div>
            <div className={this.props.classes.secondaryInfo}>Sign up email: {this.props.email}</div>
            <Button
                variant="contained"
                color="primary"
                className={this.props.classes.logoutButton}
                onClick={() => {
                  fakebookRequest.delete('/logout').catch(error => console.error(error))}
                }>
              logout
            </Button>
          </div>
          <div className={this.props.classes.subtitleLine}>Your Abominations</div>
          {this.props.abominations
            .map((abomination) => (abomination &&
              <SelfDefinedCard key={abomination.id}
                               userID={this.props.id}
                               id={abomination.id}
                               name={abomination.name}
                               url={abomination.url}
              />
            ))
          }
          {!this.props.abominations.length &&
            <p>Do you not hate anything?</p>}
          <div className={this.props.classes.subtitleLine}>Your Friends</div>
          {this.props.comrades
            .map((comrade) => (comrade &&
                <SelfDefinedCard key={comrade.id}
                                             userID={this.props.id}
                                             id={comrade.id}
                                             name={comrade.name}
                                             url={comrade.gravatar_link}
                />

            ))
          }
          {!this.props.comrades.length &&
            <p>You do not have any friend yet. Hate something to obtain more sympathy. </p>}
        </div>
    )
  }
}

export default withStyles(styles)(UserProfile);
