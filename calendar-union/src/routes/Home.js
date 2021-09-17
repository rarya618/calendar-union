import React, { Component } from "react";
import { Title, StandardButton, TextBox, BlueButton, Text } from "../App";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Text>Welcome</Text>
                <Title>Manart Mamuju</Title>
                <div>
                    <TextBox placeholder="Insert Union Name" />
                    <BlueButton>Create Union</BlueButton>
                </div>
                
                <StandardButton className="top-right" onClick={event => window.location.href='./'}>Log Out</StandardButton>
            </div>
        );
    }
}