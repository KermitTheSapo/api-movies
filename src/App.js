import React, {Component} from "react";
import Header from "./components/header.js"
import { Helmet } from "react-helmet";
import favicon from "./imgs/icon.png"

export default class App extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>BatataFlix</title>
          <link rel="shortcut icon" href={favicon} type="image/png" />
        </Helmet>
        <Header />
      </div>
    )
  }
}