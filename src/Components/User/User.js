import React, { Component } from 'react';
import "./User.css"
import { Link } from "react-router-dom"

class User extends Component {

    render() {
        return (
            <div className="user">
                <Link to={"/CandidatePage/" + this.props.data.id}>
                    <img src="https://tinyurl.com/y2nvk6f3" ></img>
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.email}</p>
                </Link>
            </div>
        );
    }
}
export { User };