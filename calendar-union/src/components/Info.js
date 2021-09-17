import React, { Component } from "react";
import { Text, Subtitle } from "../App";

export default class Info extends Component {
    render() {
        return (
            <div>
                <Subtitle>Step 1</Subtitle>
                <Text>Sign up with Google or Apple &amp; sync your calendar</Text>
                <Subtitle>Step 2</Subtitle>
                <Text>Create a union - It will automatically list your unavailable time</Text>
                <Subtitle>Step 3</Subtitle>
                <Text>Share it with your friends</Text>
                <Subtitle>Step 4</Subtitle>
                <Text>Easily confirm when everyone is available!</Text>
            </div>
        );
    }
}