import React, { Component } from 'react';
import './OneReport.css'

class OneReport extends Component {

    render() {
        return (
            <ul >

                <li className="reportData">
                    <div className="data companyName">{this.props.filtered.companyName}</div>
                    <div className="data candidateName ">{this.props.filtered.candidateName}</div>
                    <div className="data interviewDate">{this.props.filtered.interviewDate}</div>
                    <div className="data status">{this.props.filtered.status}</div>
                    <div className="data icon"> <i class="fas fa-eye" onClick={() => this.props.showReport(this.props.filtered)}></i></div>
                    <div className="data icon"> <i class="fas fa-times" onClick={() => this.props.onDelete(this.props.filtered.id)}></i></div>
                </li>
            </ul>
        );
    }
}

export default OneReport;