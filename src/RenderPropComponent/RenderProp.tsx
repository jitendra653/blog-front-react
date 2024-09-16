import React from 'react';
import RenderPropComponent from './RenderPropComponent';

const RenderProp: React.FC = () => {
  return (
    <div className="p-6">
      <RenderPropComponent
        render={({ count }) => (
          <div className="text-xl">
            Current count: <span className="font-bold">{count}</span>
          </div>
        )}
      />
    </div>
  );
};

export default RenderProp;
