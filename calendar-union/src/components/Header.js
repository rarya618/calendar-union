import React, { Component } from "react";
import { LogoImg, LogoTitle, LogoClass } from "../App";
import logo from "../resources/logo.png";

export default class Header extends Component {
    render() {
        return (
            <div className="logo-container">
                <LogoImg src={logo} />
                <LogoTitle>Calendar Union</LogoTitle>
            </div>
        );
    }
}