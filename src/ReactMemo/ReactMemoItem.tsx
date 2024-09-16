import React, { useState, useCallback } from 'react';


export interface Item {
    id: number;
    name: string;
    description: string;
  }
  
  interface ItemDetailsProps {
    item: Item;
  }
  
  interface ItemCountProps {
    count: number;
  }
  
// ItemDetails component
const ItemDetails: React.FC<ItemDetailsProps> = React.memo(({ item }) => {
  console.log('Rendering ItemDetails:', item.id);
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
});

// ItemCount component
const ItemCount: React.FC<ItemCountProps> = ({ count }) => {
  console.log('Rendering ItemCount');
  return <h1 className="text-2xl font-bold mb-4">Total Items: {count}</h1>;
};

// Parent component
const ReactMemoItem: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
  ]);

  const [count, setCount] = useState<number>(items.length);

  // Function to update item description
  const updateItemDescription = useCallback((id: number, newDescription: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  }, []);

  // Function to add new item
  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      { id: prevItems.length + 1, name: `Item ${prevItems.length + 1}`, description: `Description ${prevItems.length + 1}` },
    ]);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ItemCount count={count} />
      {items.map(item => (
        <ItemDetails key={item.id} item={item} />
      ))}
      <div className="mt-4">
        <button onClick={() => addItem()} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Add Item
        </button>
        <button onClick={() => updateItemDescription(1, 'Updated Description')} className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Update Item 1 Description
        </button>
      </div>
    </div>
  );
};

export default ReactMemoItem;
