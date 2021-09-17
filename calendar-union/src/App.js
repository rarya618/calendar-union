import './App.css';

import styled, {css} from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from "react";

import Landing from "./routes/Landing";
import Home from "./routes/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";


export const Title = styled.h3`
  color: #0084FF;
  font-weight: 600;
  margin: 1em 0 0.2em 0;
`;

export const Subtitle = styled.h5`
  color: #0084FF;
  font-weight: 600;
  margin: 1.4em 0 0.8em 0;
`;

export const Text = styled.p`
  margin: 0;
  background: #F6F8FB;
  padding: 5px 15px;
`;

export const LogoImg = styled.img`
  width: 80px;
  margin: 24px 12px;
  float: left;
`;

export const LogoTitle = styled.h3`
  color: #0084FF;
  float: left;
  font-size: 29px;
  font-weight: semibold;
`;

export const CompanyImg = styled.img`
  height: 20px;
  vertical-align: middle;
  margin: 0 7.5px 0 0;
  position: relative;
  top: -3px;
`;

export const Link = styled.a`
  color: rgb(0, 133, 255);
  font-size: calc(10px + 1vmin);
  padding: 1.2em 1em;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: #e2e2e2 !important;
  border: none !important;
  height: 1px;
  margin: 0;
`;

export const CalendarImg = styled.img`
  border-radius: 20px;
  max-width: 700px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3));
  position: relative;
`;

export const StandardButton = styled.button`
  background: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  font-size: calc(10px + 1vmin);
  color: rgb(0, 133, 255);
  margin: 0.5em;
  padding: 0.5em 0.9em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
  font-weight: semibold;
  
`;

export const BlueButton = styled.button`
  background: rgb(0, 133, 255);
  border-radius: 5px;
  border: 2px solid rgb(0, 133, 255);
  font-size: calc(10px + 1vmin);
  color: #fff;
  margin: 0.5em;
  padding: 0.5em 0.9em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
  font-weight: 600;
`;

export const TextBox = styled.input`
  background: #f2f2f2;
  border-radius: 3px;
  border: 0.5px solid #ccc;
  font-size: calc(10px + 1vmin);
  color: #000;
  margin: 0.5em;
  padding: 0.6em 1em;
  min-width: 400px;
`;


const App = () => (
  <BrowserRouter>
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/home" component={Home} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
