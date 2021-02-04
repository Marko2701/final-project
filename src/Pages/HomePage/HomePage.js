import React, { Component } from 'react';
import { UserList } from "../../Components/UserList/UserList"
import { Search } from "../../Components/Search/Search"
// import { candidatesData, getData } from "../../communicator";
import "./HomePage.css"
import { Header } from "../../Components/Header/Header"

class HomePage extends Component {

    state = {
        Users: [],
        FilteredUsers: [],
        SearchText: ""
    }

    componentDidMount = () => {


        fetch("http://localhost:3333/api/candidates")
            .then(response => response.json())
            .then(results => this.setState({
                Users: results,
                FilteredUsers: results
            }))
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.SearchText !== this.state.SearchText) {
            const a = this.state.Users.filter(user => user.name.toLowerCase().includes(nextState.SearchText.toLowerCase()))

            this.setState({
                FilteredUsers: a
            })
        }
    }

    getSearchValue = (event) => {
        this.setState({
            SearchText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Search getSearchValue={this.getSearchValue} />
                <UserList users={this.state.FilteredUsers} />
            </div>
        );
    }
}

export { HomePage };