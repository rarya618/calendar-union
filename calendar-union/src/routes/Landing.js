import React, { Component } from "react";

import { Title, BlueButton, TextBox, CalendarImg } from "../App";
import calendar from "../resources/calendar.png";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Title>Calendar Union</Title>
                <BlueButton onClick={event => window.location.href='./home'}>Sign In With Google</BlueButton>
                <CalendarImg src={calendar} />
            </div>
        );
    }
}