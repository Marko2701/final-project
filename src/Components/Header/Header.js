import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <header className="header1">
                <h1 className="header1Title">Interviews Reports</h1>
                <Link to="/"><button className="buttonCandidate">Candidates</button></Link>
            </header>
        );
    }
}

export { Header };