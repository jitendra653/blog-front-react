import React from 'react';
import UserProfile from './UserProfile';
import withAuth from './withAuth';

const AuthenticatedUserProfile = withAuth(UserProfile);

const Hoc: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const userData = {
    username: 'Jitendra',
    email: 'jitendrapatidar653@gmail.com',
  };

  return (
    <div className="p-8">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsAuthenticated(!isAuthenticated)}
      >
        Toggle Authentication
      </button>

      <AuthenticatedUserProfile
        isAuthenticated={isAuthenticated}
        {...userData}
      />
    </div>
  );
};

export default Hoc;
