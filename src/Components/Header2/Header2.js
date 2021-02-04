import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Header2.css'

class Header2 extends Component {
    render() {
        return (
            <header className='header2'>
                <h1 className='headerTitle'>Reports Administration</h1>
                <div className='buttons'>
                    <Link to="/admin"><button className='button'>Reports</button></Link>
                    <Link to="/admin/createReport"><button className='button'>Create Report</button></Link>
                </div>

            </header>
        );
    }
}

export default Header2;