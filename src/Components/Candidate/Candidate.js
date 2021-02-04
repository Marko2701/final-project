import React, { Component } from 'react';
import './Candidate.css'

class Candidate extends Component {
    render() {
        return (
            <div className='wrapper'>
                <img src="https://tinyurl.com/y2nvk6f3"></img>
                <div className='nameEmail col'>
                    <p>Name:</p>
                    <div className='fontSize'>{this.props.candidate.name}</div>
                    <p>Email:</p>
                    <div className='fontSize'>{this.props.candidate.email}</div>
                </div>
                <div className='dateBirth col'>
                    <p>Date of birth:</p>
                    <div className='fontSize'>{this.props.candidate.birthday}</div>
                    <p>Education:</p>
                    <div className='fontSize'>{this.props.candidate.education}</div>
                </div>
            </div>
        );
    }
}

export default Candidate;