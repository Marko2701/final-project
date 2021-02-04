import React, { Component } from 'react';
import "./CandidatesListUser.css"

class CandidatesListUser extends Component {

    state = {
        changeClass: false
    }

    a = () => {
        this.props.getCandidateData(this.props.data)
        this.setState({
            changeClass: true
        })
    }

    render() {
        return (
            <div id="candidateUser" onClick={() => this.a()} className={this.state.changeClass === true ? "selected" : ""}>
                <div id="image">
                    <img src="https://tinyurl.com/y2nvk6f3" />
                </div>
                <div id="description">
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.email}</p>
                </div>

            </div>
        );
    }
}

export { CandidatesListUser };