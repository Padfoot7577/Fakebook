import React from "react"
import PropTypes from "prop-types"

class GreetUser extends React.Component {

  render () {
    return (
      <div>
        <h1>Hello {this.props.name}, </h1>
        <h1>BBB is disgusting.</h1>
      </div>
    );
  }
}

GreetUser.propTypes = {
  name: PropTypes.string
};

export default GreetUser
