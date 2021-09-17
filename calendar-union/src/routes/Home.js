import React, { Component } from "react";
import { Title, StandardButton, TextBox, BlueButton, Text } from "../App";

import Info from "../components/Info";

const Home = () => (
    <div>
        <Text>Welcome</Text>
        {/* Name to be replaced with the one pulled from the API */}
        <Title>Manart Mamuju</Title>
        <div>
            {/* <TextBox placeholder="Insert Union Name" /> */}
            <TextBox placeholder="Create Union" />
            <BlueButton>Create Union</BlueButton>
        </div>
        <Title>How to Create Union</Title>
        <Info />
        
    </div>
);

export default Home;