import React from 'react';

interface AccordionHeaderProps {
  onToggle: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ onToggle, isOpen, children }) => (
  <div
    className={`cursor-pointer py-2 px-4 ${isOpen ? 'bg-gray-200 font-bold' : 'bg-gray-100'}`}
    onClick={onToggle}
  >
    {children}
  </div>
);
