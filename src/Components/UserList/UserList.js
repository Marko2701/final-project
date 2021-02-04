import React, { Component } from 'react';
import { User } from "../User/User"
import "./UserList.css"

class UserList extends Component {

    render() {
        return (
            <div id="userList">
                {this.props.users.map(el => <User data={el}></User>)}
            </div>
        );
    }
}

export { UserList };