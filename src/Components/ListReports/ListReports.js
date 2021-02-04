import React, { Component } from 'react';
import OneReport from '../OneReport/OneReport';
import './ListReports.css'

class ListReports extends Component {

    renderFilteredResult = () => {
        return this.props.filteredReports.map(oneResult => <OneReport filtered={oneResult} showReport={this.props.showReport} onDelete={this.props.onDelete}></OneReport>)
    }

    render() {
        return (
            <div className="ulWrapper">
                {this.renderFilteredResult()}
            </div>
        );
    }
}
export default ListReports;