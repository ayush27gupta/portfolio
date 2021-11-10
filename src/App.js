import React, { Component } from "react";

import {BrowserRouter} from "react-router-dom"
import Start from "./components/start/Start";

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <div className="container_app">
         <Start/>
        </div>
        </BrowserRouter>
      </>
    );
  }
}
