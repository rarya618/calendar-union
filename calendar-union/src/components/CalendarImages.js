import React, { Component } from "react";

import calendar from "../resources/calendar.png";
import { CalendarImg } from "../App";

export default class CalendarImages extends Component {
    render() {
        return (
            <div className="cal-img-container">
                <CalendarImg src={calendar} />
                <CalendarImg className="second" src={calendar} />
            </div>
        );
    }
}