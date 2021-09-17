import React, { Component } from "react";
import { LogoImg, LogoTitle, RightDots, LeftDots, StandardButton } from "../App";

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

        <StandardButton className="top-right" onClick={event => window.location.href='./'}>Log Out</StandardButton>
    </div>
);

export default Header;