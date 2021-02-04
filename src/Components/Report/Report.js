import React, { Component } from 'react';

class Report extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.report.companyName}
                </td>
                <td>
                    {this.props.report.interviewDate}
                </td>
                <td>
                    {this.props.report.status}
                </td>

                <td >
                    <i class="fas fa-eye" onClick={() => this.props.showReport(this.props.report)}></i>
                </td>


            </tr>

        );
    }
}

export default Report;