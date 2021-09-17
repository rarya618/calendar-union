import React, { Component } from "react";

import { StandardButton, CompanyImg, Text, Title, Subtitle } from "../App";
import googleLogo from "../resources/google.png";
import appleLogo from "../resources/apple.png";
import CalendarImages from "../components/CalendarImages";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div className="right-container">
                    <CalendarImages />
                </div>
                <div className="left-container">
                    <Title>How to Register</Title>
                    <Subtitle>Step 1</Subtitle>
                    <Text>Sign up with Google or Apple &amp; sync your calendar</Text>
                    <Subtitle>Step 2</Subtitle>
                    <Text>Create a union - It will automatically list your unavailable time</Text>
                    <Subtitle>Step 3</Subtitle>
                    <Text>Share it with your friends</Text>
                    <Subtitle>Step 4</Subtitle>
                    <Text>Easily confirm when everyone is available!</Text>

                    <Title>Sign In With</Title>
                    <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={googleLogo} />Google</StandardButton>
                    <StandardButton onClick={event => window.location.href='./home'}><CompanyImg src={appleLogo} />Apple</StandardButton>
                </div>
            </div>
        );
    }
}