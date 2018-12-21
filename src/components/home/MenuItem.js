import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { Link } from "react-router-dom";
const styles = theme => ({
  menuItem: {
    fontSize: `16px`
  },
  caret: {
    display: `inline-block`,
    width: 0,
    height: 0,
    marginLeft: `7px`,
    verticalAlign: `middle`,
    borderTop: `4px dashed`,
    borderRight: `4px solid transparent`,
    borderLeft: `4px solid transparent`
  },
  title: {
    textTransform: `none`
  },
  iconClass: {}
});

class MenuItem extends Component {
  render() {
    const { classes, icon, title, droped, to, className } = this.props;
    return (
      <Button
        component={Link}
        to={to}
        className={classNames(classes.menuItem, className)}
      >
        <i className={classNames(icon, classes.iconClass)} />
        <span className={classes.title}>{title}</span>
        {droped && <b className={classes.caret} />}
      </Button>
    );
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuItem);
