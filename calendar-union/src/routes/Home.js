import React, { Component } from "react";
import { Title, BlueButton, TextBox } from "../App";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Title>Calendar Union</Title>
                <div>
                    <TextBox placeholder="Insert Union Name" />
                    <BlueButton>Create Union</BlueButton>
                </div>
                
                <BlueButton onClick={event => window.location.href='./'}>Sign Out</BlueButton>
            </div>
        );
    }
}