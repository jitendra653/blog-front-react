import React from 'react';

interface UserProfileProps {
  username: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email }) => {
  return (
    <div className="p-4 bg-blue-100 text-blue-800 border border-blue-300 rounded">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-2">Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
