import React, { Component } from 'react';
import { getData } from "../../communicator"
import { CandidatesListUser } from "../CandidatesListUser/CandidatesListUser"
import "./CandidatesList.css"
import { Link } from "react-router-dom"

class CandidatesList extends Component {

    state = {
        data: [],
        filteredData: [],
        SearchText: ""
    }

    componentDidMount = () => {
        getData("candidates")
            .then(results => this.setState({
                data: results,
                filteredData: results
            }))
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.SearchText !== this.state.SearchText) {
            const a = this.state.data.filter(user => user.name.toLowerCase().includes(nextState.SearchText.toLowerCase()))

            this.setState({
                filteredData: a
            })
        }
    }

    getSearchValue = (event) => {
        this.setState({
            SearchText: event.target.value
        })
    }

    candidateName = (event) => {
        this.props.candidateName(event.target)
    }

    render() {
        return (
            <div id="candidates">
                <input id="candidateSearch" type="text" placeholder="Search..." onChange={this.getSearchValue} />
                <div id="candidatesList">
                    {this.state.filteredData.map(el => <CandidatesListUser data={el} getCandidateData={this.props.getCandidateData}></CandidatesListUser>)}
                </div>
                <button id="candidateButton" onClick={this.props.selectCompany}>Next</button>
            </div>
        );
    }
}

export { CandidatesList };