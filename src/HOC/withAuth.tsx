import React from 'react';

interface WithAuthProps {
  isAuthenticated: boolean;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth: React.FC<P & WithAuthProps> = ({ isAuthenticated, ...props }) => {
    if (!isAuthenticated) {
      return (
        <div className="p-4 bg-red-100 text-red-600 border border-red-300 rounded">
          <p>Please log in to access this content.</p>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
