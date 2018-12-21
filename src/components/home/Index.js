import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { withStyles } from "@material-ui/core/styles";
import BGJPG from "../../assets/image/background.jpg";
import Container from "./Container";
const styles = theme => ({
  home: {
    fontSize: `16px`,
    lineHeight: 1.42857143,
    color: `#abacb1`,
    backgroundColor: `#151a1e`,
    backgroundImage: `url(${BGJPG})`,
    backgroundPosition: `100% center`,
    backgroundAttachment: `fixed`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: `100%`,
    padding: `15px`
  }
});
class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <Container>
          <Header />
        </Container>
      </div>
    );
  }
}
Index.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Index);
