import React, { Component } from 'react';
import Header2 from './Components/Header2/Header2'
import { Search } from './Components/Search/Search'
import ListReports from './Components/ListReports/ListReports';
import { ReportOverview } from "./Components/ReportOverview/ReportOverview"
// import { Link } from "react-router-dom"

class Admin extends Component {
    state = {
        reportsData: [],
        FilteredReports: [],
        SearchText: "",
        showReportOv: false,
        reportData: []

    }

    showReport = (event) => {
        this.setState({
            reportData: event,
            showReportOv: true
        })
    }

    removeReport = () => {
        this.setState({
            showReportOv: false
        })
    }

    componentDidMount = () => {
        fetch("http://localhost:3333/api/reports")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        reportsData: result,
                        FilteredReports: result
                    });
                },
            )

    }
    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.SearchText !== this.state.SearchText) {
            const searchResult = this.state.reportsData.filter(report => report.candidateName.toLowerCase().includes(nextState.SearchText.toLowerCase()) || report.companyName.toLowerCase().includes(nextState.SearchText.toLowerCase()) || report.interviewDate.toLowerCase().includes(nextState.SearchText.toLowerCase()) || report.status.toLowerCase().includes(nextState.SearchText.toLowerCase()))
            this.setState({
                FilteredReports: searchResult
            })
            // console.log(this.state.FilteredReports, 'filtrirano')
        }
    }
    getSearchValue = (event) => {
        // console.log(event.target.value)
        this.setState({
            SearchText: event.target.value
        })
    }

    onReportDelete = (id) => {
        const newList = [...this.state.FilteredReports].filter(report => report.id !== id)
        this.setState({
            FilteredReports: newList
        })
    }
    render() {
        return (
            <div>
                {this.state.showReportOv === true && <ReportOverview userData={this.state.reportData} removeReport={this.removeReport}></ReportOverview>}
                <Header2 />
                <Search getSearchValue={this.getSearchValue} />
                <ListReports filteredReports={this.state.FilteredReports} showReport={this.showReport} onDelete={this.onReportDelete} />
                {/* <button><Link to="/loginPage">Login</Link></button> */}
            </div>
        );
    }
}
export default Admin;