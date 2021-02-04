import React, { Component } from 'react';
import './ReportTable.css'
import Report from '../Report/Report'
// import Companies from '../Companies/Companies'

class ReportTable extends Component {
    renderReport = () => {
        return this.props.reports.map(report => <Report report={report} showReport={this.props.showReport}></Report>)

    }

    render() {
        return (
            <div>
                <table className='table'>
                    <tr>
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th colspan="2">Status</th>
                    </tr>
                    {this.renderReport()}

                </table>
            </div>
        );
    }
}
export default ReportTable;