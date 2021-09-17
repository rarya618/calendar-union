import React, { Component } from "react";
import { Title, StandardButton, TextBox, BlueButton, Text, Icon, IconButton } from "../App";

import Info from "../components/Info";
import viewIcon from "../resources/view-icon.png";
import deleteIcon from "../resources/delete-icon.png";

var unions = [{
    date:"2nd of September 2021",
    unionName:"First Freelancer",
    view:"calendar",
    delete:"delete",
}];

const Home = () => (
    <div>
        <Text>Welcome</Text>
        {/* Name to be replaced with the one pulled from the API */}
        <Title>Manart Mamuju</Title>
        <div>
            {/* <TextBox placeholder="Insert Union Name" /> */}
            <TextBox placeholder="Create Union" name="unionName"/>
            <BlueButton onClick={event => unions.push("First Freelancer")}>Create Union</BlueButton>
        </div>
        { unions.length > 0 ?
        <>
        <table className="union-list">
            <tr>
                <th>Date</th>
                <th>Union Name</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>{unions[0]['date']}</td>
                <td>{unions[0]['unionName']}</td>
                <td><IconButton className="blue" onclick={()=>window.location.href='./calendar'}><Icon src={viewIcon} /></IconButton></td>
                <td><IconButton className="red"><Icon src={deleteIcon} /></IconButton></td>
            </tr>
        </table>
        </>
        : 
        // for (const union of unions) {}
        <>
        <Title>How to Create Union</Title>
        <Info />
        </>
    }
        
    </div>
);

export default Home;