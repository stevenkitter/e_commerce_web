import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  container: {
    color: `#abacb1`
  },
  caret: {
    display: `inline-block`,
    width: 0,
    height: 0,
    marginLeft: `2px`,
    verticalAlign: `middle`,
    borderTop: `4px dashed`,
    borderRight: `4px solid transparent`,
    borderLeft: `4px solid transparent`
  }
});

class MenuItem extends Component {
  render() {
    // ""
    const { classes, icon, title, droped } = this.props;
    return (
      <div className={classes.container}>
        <i className={icon} />
        <span>{title}</span>
        {droped && <b className={classes.caret} />}
      </div>
    );
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuItem);
