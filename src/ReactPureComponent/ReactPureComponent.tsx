import React, { Component } from 'react';
import UserList from './UserList';
import { User } from './types';

class ReactPureComponent extends Component {
  state = {
    users: [
      { id: 1, name: 'Jitendra', age: 20 },
      { id: 2, name: 'J patel', age: 30 },
    ] as User[],
  };

  handleUpdateAge = (id: number, newAge: number) => {
    this.setState((prevState:any) => ({
      users: prevState.users.map((user:any) =>
        user.id === id ? { ...user, age: newAge } : user
      ),
    }));
  };

  render() {
    const { users } = this.state;
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">User List</h1>
        <UserList users={users} onUpdateAge={this.handleUpdateAge} />
      </div>
    );
  }
}

export default ReactPureComponent;
