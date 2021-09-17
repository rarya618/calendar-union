import React, { Component } from "react";

import { StandardButton, CompanyImg, Text, Title, Subtitle } from "../App";
import googleLogo from "../resources/google.png";
import appleLogo from "../resources/apple.png";
import CalendarImages from "../components/CalendarImages";
import Info from "../components/Info";

const Landing = () => (
    <div>
        <div className="left-container">
            <div className="left-align">
                <Title>How to Register</Title>
                <Info />
            </div>
            <Title>Sign In With</Title>
            <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={googleLogo} />Google</StandardButton>
            <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={appleLogo} />Apple</StandardButton>
        </div>
        <div className="right-container">
            <CalendarImages />
        </div>
    </div>
);
export default Landing;