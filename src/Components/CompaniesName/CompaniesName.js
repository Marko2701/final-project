import React, { Component } from 'react';
import "./CompaniesName.css"


class CompaniesName extends Component {

    render() {
        return (

            <tr onClick={() => this.props.getCompanyData(this.props.dataCompany)}>
                <td className='dataCompany' >
                    {this.props.dataCompany.name}
                </td>
            </tr>




        );
    }
}

export { CompaniesName };

// this.props.getCompanyData(this.props.dataCompany)