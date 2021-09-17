import React, { Component } from "react";

import { StandardButton, CompanyImg, Text, Title, Subtitle } from "../App";
import googleLogo from "../resources/google.png";
import appleLogo from "../resources/apple.png";
import CalendarImages from "../components/CalendarImages";
import Info from "../components/Info";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="right-container">
                    <CalendarImages />
                </div>
                <div className="left-container">
                    <Title>How to Register</Title>
                    <Info />
                    <Title>Sign In With</Title>
                    <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={googleLogo} />Google</StandardButton>
                    <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={appleLogo} />Apple</StandardButton>
                </div>
            </div>
        );
    }
}