import React, { Component } from 'react';
import "./SubmitReport.css"


class SubmitReport extends Component {

    state = {
        date: "",
        phase: "",
        status: "",
        notes: ""
    }

    saveField = (event, field) => {
        this.setState({
            [field]: event.target.value
        })
        // this.props.fieldData(event, field)
    }


    render() {
        return (
            <div id="wrapper">
                <div id="select">
                    <div className="wrappers">
                        <p>Interview Date:</p>

                        <input type="date" onChange={e => this.saveField(e, 'date')} required></input>
                    </div>
                    <div className="wrappers">
                        <p>Phase:</p>

                        <select onChange={e => this.saveField(e, 'phase')} required>
                            <option>Technical</option>
                            <option>Hr</option>
                            <option>BlaBla</option>
                        </select>
                    </div>
                    <div className="wrappers">
                        <p>Status:</p>

                        <select onChange={e => this.saveField(e, 'status')} required>
                            <option>Passed</option>
                            <option>Declined</option>
                        </select>
                    </div>
                </div>

                <p>Notes:</p>

                <textarea onChange={e => this.saveField(e, "notes")} required></textarea>

                <div id="reportButtons">
                    <button onClick={this.props.backToSelectCompany}>Back</button>
                    <button onClick={() => this.props.getReportDetails(this.state.date, this.state.phase, this.state.status, this.state.notes)} >Submit</button>
                </div>
            </div>
        );
    }
}

export { SubmitReport };