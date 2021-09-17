import React, { Component } from "react";
import { LogoImg, LogoTitle } from "../App";
import logo from "../resources/logo.png";

const Header = () => (
        <div className="logo-container">
            <LogoImg src={logo} />
            <LogoTitle>Calendar Union</LogoTitle>
        </div>
    );

export default Header;