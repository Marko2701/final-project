import React, { Component } from 'react';
import ListReports from '../../Components/ListReports/ListReports';


class ReportsAdmHome extends Component {

    render() {
        return (
            <div>
                <ListReports reportsData={this.props.reportsData} />
            </div>
        );
    }
}
export { ReportsAdmHome };