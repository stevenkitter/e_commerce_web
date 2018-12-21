import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "./MenuItem";
const styles = theme => ({
  nav: {
    background: "rgba(21,26,30,.8)"
  },
  menu: {
    display: `flex`,
    alignItems: "center",
    marginLeft: 0
  },
  menuItem: {
    marginRight: `8px`,
    color: `#abacb1`,
    textDecoration: "none",
    padding: `15px 10px`
  }
});
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <nav className={classes.nav}>
          <div className={classes.menu}>
            <MenuItem
              className={classes.menuItem}
              icon="flaticon flaticon-home-page"
              title="Home"
              to="/"
            />
            <MenuItem
              className={classes.menuItem}
              icon="flaticon flaticon-signal-bars"
              title="Leagues"
              to="/"
              droped
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
