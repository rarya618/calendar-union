import React, { Component } from "react";
import { Title, StandardButton, TextBox, BlueButton, Text } from "../App";

import Info from "../components/Info";

const Home = () => (
    <div>
        <Text>Welcome</Text>
        <Title>Manart Mamuju</Title>
        <div>
            {/* <TextBox placeholder="Insert Union Name" /> */}
            <TextBox placeholder="Create Union" />
            <BlueButton>Create Union</BlueButton>
        </div>
        <Title>How to Create Union</Title>
        <Info />
        
        <StandardButton className="top-right" onClick={event => window.location.href='./'}>Log Out</StandardButton>
    </div>
);

export default Home;