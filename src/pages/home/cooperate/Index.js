import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class Index extends Component {
  render() {
    return (
      <div>
        <div>Cooperate</div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({});
export default withStyles(styles)(Index);
