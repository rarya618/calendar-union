import './App.css';

import styled, {css} from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from "react";

import logo from "./resources/logo.png";

import Landing from "./routes/Landing";
import Home from "./routes/Home";


export const Title = styled.h1``;

export const LogoImg = styled.img`
  width: 100px;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: #ccc !important;
  border: none !important;
  height: 1px;
  margin: 0;
`;

export const CalendarImg = styled.img``;

export const BlueButton = styled.button`
  background: rgb(0, 133, 255);
  border-radius: 3px;
  border: 2px solid rgb(0, 133, 255);
  font-size: calc(10px + 1vmin);
  color: #fff;
  margin: 0.5em;
  padding: 0.5em 1em;
`;

export const TextBox = styled.input`
  background: #f2f2f2;
  border-radius: 3px;
  border: 0.5px solid #ccc;
  font-size: calc(10px + 1vmin);
  color: #000;
  margin: 0.5em;
  padding: 0.5em 1em;
`;


class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <LogoImg src={logo} />
            <Divider />
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/home" component={Home} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
