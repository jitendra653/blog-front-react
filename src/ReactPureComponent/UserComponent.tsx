import React from 'react';
import { User, UserProps } from './types';

class UserComponent extends React.PureComponent<UserProps> {
  render() {
    const { user } = this.props;
    console.log('Rendering UserComponent:', user.id);
    return (
      <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">Age: {user.age}</p>
      </div>
    );
  }
}

export default UserComponent;
