import React, { Component } from "react";
import { LogoImg, LogoTitle, RightDots, LeftDots } from "../App";

import logo from "../resources/logo.png";
import dots from "../resources/background-dots.png";

const Header = () => (
    <div>
        <div className="logo-container">
            <LogoImg src={logo} />
            <LogoTitle>Calendar Union</LogoTitle>
        </div>
        <RightDots src={dots} />
        <LeftDots src={dots} />
    </div>
);

export default Header;