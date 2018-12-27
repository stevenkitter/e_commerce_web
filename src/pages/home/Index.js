import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Cooperate from "./cooperate/Index";
import Home from "./index/Home";
import Nav from "./Nav";
import { withStyles } from "@material-ui/core/styles";

class Index extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cooperate" exact component={Cooperate} />
        </Switch>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({});
export default withStyles(styles)(Index);
