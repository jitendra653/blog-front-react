import React from 'react';

interface AccordionContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ isOpen, children }) => (
  <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
    <div className="py-4 px-4 bg-gray-50">
      {children}
    </div>
  </div>
);
