import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render() {
    const list = this.state.users.map((user,index)=> (<li data-test="li-user" key={index}>{user}</li>))
    return (
      <ul data-test="user-list">
        {list}
      </ul>
    );
  }
}
 export default UserList;