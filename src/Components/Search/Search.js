import React, { Component } from 'react';
import "./Search.css"

class Search extends Component {
    render() {
        return (
            <div id="search">
                <h2>Candidates</h2>
                <input type="text" placeholder="Search..." onChange={this.props.getSearchValue}></input>
            </div>
        );
    }
}
export { Search };