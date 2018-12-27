import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Caret } from "../components/styles";
const LOGO =
  "https://img.yzcdn.cn/public_files/2016/11/29/8fc4cd6f771897cbf9663166a63a5302.png";

class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.nav}>
        <div className={classes.container}>
          <div className={classes.brand}>
            <a href="/" className={classes.logo}>
              <img src={LOGO} alt="logo img" />
            </a>
          </div>
          <ul className={classes.navList}>
            <li>
              <NavLink exact to="/" activeClassName="navListActive">
                首页
              </NavLink>
            </li>
            <li className="caret">
              <div>
                商家服务
                <Caret />
              </div>
            </li>
            <li className="caret">
              <span>
                消费者
                <Caret />
              </span>
            </li>
            <li>
              <NavLink exact to="/cooperate" activeClassName="navListActive">
                渠道合作
              </NavLink>
            </li>
            <li className="caret">
              <span>
                开放平台
                <Caret />
              </span>
            </li>
            <li className="caret">
              <span>
                更多服务
                <Caret />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

const activeColor = `red`;
const normalColor = `#2c3a46`;

const styles = theme => ({
  nav: {
    background: "#fff",
    boxShadow: `0px 1px 4px rgba(0, 0, 0, 0.1)`,
    borderBottom: "1px solid #ededed"
  },
  container: {
    display: `flex`,
    flexDirection: "row",
    [theme.breakpoints.up("lg")]: {
      width: `1200px`,
      margin: `0 auto`
    },
    justifyContent: "space-between",
    alignItems: "center"
  },
  navList: {
    "& li": {
      position: `relative`,
      float: `left`,
      height: `70px`,
      lineHeight: `70px`,
      padding: `0 20px`,
      color: `${normalColor}`,
      "&.caret": {
        marginRight: `16px`
      },
      "& span": {
        cursor: `pointer`,
        "&:hover": {
          color: `${activeColor}`
        }
      },
      "& .navListActive": {
        color: `${activeColor}`
      },
      "& a:hover": {
        color: `${activeColor}`
      }
    }
  }
});
export default withStyles(styles)(Nav);
