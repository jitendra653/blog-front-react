import React from 'react';

interface RenderPropComponentProps {
  render: (data: { count: number }) => React.ReactNode;
}

const RenderPropComponent: React.FC<RenderPropComponentProps> = ({ render }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (<>
  <h3>Render Prop Component</h3>
    <div className="p-4 border rounded-lg shadow-md">
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <div className="mt-2">{render({ count })}</div>
    </div></>
  );
};

export default RenderPropComponent;
