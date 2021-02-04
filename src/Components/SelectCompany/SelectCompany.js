import React, { Component } from 'react';
import { getCompany } from "../../communicator"
import { CompaniesName } from "../CompaniesName/CompaniesName"
import { Link } from "react-router-dom"
import "./SelectCompany.css"

import { SubmitReport } from '../SubmitReport/SubmitReport'

class SelectCompany extends Component {

    state = {
        dataCompanies: [],
        getSearchByCompany: "",
        filteredCompany: []

    }
    renderCompanies = () => {
        return this.state.filteredCompany.map(el => <CompaniesName dataCompany={el} getCompanyData={this.props.getCompanyData}></CompaniesName>)

    }
    // showThisPage = () => {
    //     if (this.state.showPage2 === true) {
    //         return <SubmitReport goBack={this.goBack}></SubmitReport>
    //     } else {
    //         return <SelectCompany dataCompanies={this.showPage2}></SelectCompany>
    //     }
    // }
    getSearchByCompany = (event) => {
        this.setState({
            getSearchByCompany: event.target.value
        })
    }
    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.getSearchByCompany !== this.state.getSearchByCompany) {
            const chosenCompany = this.state.dataCompanies.filter(company => company.name.toLowerCase().includes(nextState.getSearchByCompany.toLowerCase()))

            this.setState({
                filteredCompany: chosenCompany
            })
        }
    }
    componentDidMount = () => {
        getCompany()
            .then(results => {
                console.log(results)
                this.setState({
                    dataCompanies: results,
                    filteredCompany: results
                })
                console.log(this.state.dataCompanies)
            }
            )
    }
    render() {
        return (
            <div className='companyWrapper'>
                <div className="searchWrapper">
                    <input className="companySearch" type="text" placeholder="Search..." onChange={this.getSearchByCompany} />
                </div>
                <table className='companyTable'>
                    {this.renderCompanies()}
                </table>
                <div className="reportButtons">
                    <button className='buttonBack' onClick={this.props.backToSelectCandidate}>Back</button>
                    <button className='buttonNext' onClick={this.props.SubmitReport}>Next</button>
                </div>
            </div>
        );
    }
}

export { SelectCompany };