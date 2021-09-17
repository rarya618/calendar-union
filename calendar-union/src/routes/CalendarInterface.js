import React, { Component } from "react";
import Calendar from "../components/Calendar";
import { BlueButton, Online, Offline, Title, Subtitle, Collaborator } from "../App";

const CalendarInterface = () => (
    <div>
        <div className="left-container left-align">
            <Title>Freelancer</Title>
            <BlueButton>Sync My Cal</BlueButton>
            <BlueButton>Share</BlueButton>
            <Subtitle>Collaborators</Subtitle>
            <Collaborator><Online></Online>Collaborator 1</Collaborator>
            <Collaborator><Online></Online>Collaborator 2</Collaborator>
            <Collaborator><Offline></Offline>Collaborator 3</Collaborator>
            <Collaborator><Offline></Offline>Collaborator 4</Collaborator>
        </div>

        <div className="full-calendar-container">
            <Calendar />
        </div>
    </div>
);

export default CalendarInterface;