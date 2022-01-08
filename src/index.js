import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// A custom theme for this app
const theme = createTheme({
  typography: {
    h4: { fontFamily: "Titan One" },
    body: { fontFamily: "Roboto" },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      //main: "#e3f2fd",
      //main: "#556cd6",  //original
    },
    // secondary: {
    //   //main: "#19857b",
    // },
    // error: {
    //   main: "#f44336",
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
