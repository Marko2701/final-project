import React, { Component } from 'react';
import "./ReportOverview.css"

class ReportOverview extends Component {
    render() {
        return (
            <div id="reportOverview">
                <div id="reportOverviewTable">
                    <div id="header">
                        <h2>{this.props.userData.candidateName}</h2>
                        <button onClick={this.props.removeReport}>X</button>
                    </div>
                    <div id="data">
                        <div>
                            <p>Company</p>
                            <h4>{this.props.userData.companyName}</h4>
                            <p>Interview Date</p>
                            <h4>{this.props.userData.interviewDate}</h4>
                            <p>Phase</p>
                            <h4>{this.props.userData.phase}</h4>
                            <p>Status</p>
                            <h4>{this.props.userData.status}</h4>
                        </div>
                        <div id="notes">
                            <p>Notes</p>
                            {this.props.userData.note}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ReportOverview };