import React, { Component } from 'react';
import './Companies.css'
import Company from '../Company/Company'
import Reports from '../Reports/Reports'

class Companies extends Component {
    renderCompanyName = () => {
        return <td className="all">
            {this.props.reports.map(allCompanyName => <Reports reports={allCompanyName}></Reports>)}
        </td>
    }
    render() {
        return (
            <>
                <tr>{this.renderCompanyName()}</tr>
            </>
        );
    }
}

export default Companies;