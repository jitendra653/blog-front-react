declare module 'react-window' {
    import * as React from 'react';
  
    export interface FixedSizeListProps {
      height: number;
      itemCount: number;
      itemSize: number;
      width: number | string;
      children: (props: { index: number; style: React.CSSProperties }) => React.ReactNode;
    }
  
    export class FixedSizeList extends React.Component<FixedSizeListProps> {}
  }
  