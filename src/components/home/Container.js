import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  container: {
    [theme.breakpoints.up("md")]: {
      padding: `0 80px`
    },
    padding: `15px 0`,
    margin: `0 auto`
  }
});

class Container extends Component {
  render() {
    const { classes, children, ...other } = this.props;
    return (
      <div className={classes.container} {...other}>
        {children}
      </div>
    );
  }
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
