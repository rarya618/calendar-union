import React, { Component } from "react";

import calendar from "../resources/calendar.png";
import { CalendarImg } from "../App";

const CalendarImages = () => (
    <div className="cal-img-container">
        <CalendarImg className="first" src={calendar} />
        <CalendarImg className="second" src={calendar} />
    </div>
);
export default CalendarImages;