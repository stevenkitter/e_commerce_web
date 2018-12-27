import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import "./App.css";
import Container from "./pages/App";
import store from "./redux/store";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#1aad19`
    },
    secondary: { main: "#576b95" }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <Container />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
