import React from 'react';
import { User, UserListProps } from './types';
import UserComponent from './UserComponent';

class UserList extends React.PureComponent<UserListProps> {
  render() {
    const { users, onUpdateAge } = this.props;
    console.log('Rendering UserList');
    return (
      <div>
        {users.map(user => (
          <UserComponent key={user.id} user={user} />
        ))}
        <button
          onClick={() => onUpdateAge(1, 30)}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Update Age of User 1
        </button>
      </div>
    );
  }
}

export default UserList;
