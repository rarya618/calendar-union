import React, { Component } from "react";
import { LogoImg, Link } from "../App";
import logo from "../resources/logo.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Link href="">Terms &amp; Conditions</Link>
                <Link href="">Privacy Policy</Link>
            </div>
        );
    }
}