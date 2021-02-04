import React, { Component } from 'react';
import Header2 from "../../../Components/Header2/Header2"
import { CandidatesList } from "../../../Components/CandidatesList/CandidatesList"
import "./ReportsAdmWizard.css"
import { SelectCompany } from '../../../Components/SelectCompany/SelectCompany';
import { SubmitReport } from "../../../Components/SubmitReport/SubmitReport"
import { saveReport } from "../../../communicator"


class ReportsAdmWizard extends Component {
    state = {
        selectCompany: '',
        homePage: true,
        submitReport: "",
        candidate: {
            name: "",
            company: "",
            date: "",
            phase: "",
            status: "",
            notes: ""
        }
    }

    getCandidateData = (data) => {
        this.setState({
            candidate: {
                name: data.name,
                // company: "",
                // date: "",
                // phase: "",
                // status: "",
                // notes: ""
            }
        })
    }

    getCompanyData = (data) => {
        console.log(data)
        this.setState({
            candidate: {
                name: this.state.candidate.name,
                company: data.name,
                // date: "",
                // phase: "",
                // status: "",
                // notes: ""
            }
        })
    }

    getReportDetails = (date, phase, status, notes) => {
        this.setState({
            candidate: {
                name: this.state.candidate.name,
                company: this.state.candidate.company,
                date: date,
                phase: phase,
                status: status,
                notes: notes
            }
        })
        // if (this.state.candidate.name === '' || this.state.candidate.company === '' || this.state.candidate.date === '' || this.state.candidate.phase === '' || this.state.candidate.status === '' || this.state.candidate.notes === '') return console.log('prosaaao')
        saveReport(this.state.candidate, this.props.token)
    }
    selectCompany = () => {
        this.setState({
            selectCompany: true,
            homePage: false
        })
    }
    submitReport = () => {
        this.setState({
            submitReport: true,
            selectCompany: false,
            homePage: false
        })
    }
    backToSelectCompany = () => {
        this.setState({
            selectCompany: true,
            submitReport: false,
            homePage: false,
        })
    }
    backToSelectCandidate = () => {
        this.setState({
            selectCompany: false,
            homePage: true
        })
    }

    // fieldData = (event, field) => {
    //     this.setState({
    //         : {
    //             [field]: event.target.value
    //         }
    //     })
    // }

    showThisPage = () => {
        if (this.state.selectCompany === true) {
            return <SelectCompany SubmitReport={this.submitReport} showThisPage={this.showThisPage} backToSelectCandidate={this.backToSelectCandidate} getCompanyData={this.getCompanyData}></SelectCompany>
        } else if (this.state.submitReport === true) {

            return <SubmitReport backToSelectCompany={this.backToSelectCompany} getReportDetails={this.getReportDetails} fieldData={this.fieldData}></SubmitReport>
        }
        else {
            return <CandidatesList selectCompany={this.selectCompany} getCandidateData={this.getCandidateData}></CandidatesList>
        }
    }



    render() {
        return (
            <>
                <Header2 />
                <div id="reportWizard">

                    <div id="reportWizardSteps">
                        <ul>
                            <li ><span className="number">1</span> <span className={this.state.homePage ? "bolded" : ""}>Select Candidate</span></li>
                            <li ><span className="number">2</span> <span className={this.state.selectCompany ? "bolded" : ""}>Select Company</span></li>
                            <li ><span className="number">3</span> <span className={this.state.submitReport ? "bolded" : ""}>Fill Report Details</span></li>
                        </ul>
                        <div id="reportWizardData">
                            {this.state.selectCompany === true && <div>
                                <p>Candidate</p>
                                <h3>{this.state.candidate.name}</h3>
                            </div>}

                            {this.state.submitReport === true && <div>
                                <p>Candidate</p>
                                <h3>{this.state.candidate.name}</h3>
                                <p>Company</p>
                                <h3>{this.state.candidate.company}</h3>
                            </div>}
                        </div>

                    </div>
                    {this.showThisPage()}
                </div>
            </>
        );
    }
}

export { ReportsAdmWizard }