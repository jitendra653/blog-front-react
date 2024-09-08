import React from 'react';
import { FixedSizeList as List } from 'react-window';

interface RowProps {
  index: number;
}

const Row: React.FC<RowProps> = ({ index, style }:any) => (
  <div className="p-2 border-b border-gray-200" style={style}>
    Row {index + 1}
  </div>
);

const VirtualizedList: React.FC = () => {
  const itemCount = 1000; // Total number of items in the list
  const itemSize = 35;    // Height of each item
  const height = 600;     // Height of the visible viewport

  return (
    <List
      height={height}
      itemCount={itemCount}
      itemSize={itemSize}
      width={300}
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
