import React, { ReactNode } from 'react';
import { useAccordion } from './Accordion';

interface AccordionSectionProps {
  index: number;
  children: ReactNode;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({ index, children }) => {
  const { openSection, setOpenSection } = useAccordion();

  const isOpen = index === openSection;

  const handleToggle = () => {
    setOpenSection(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-200">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Clone element with additional props
          const additionalProps = { isOpen, onToggle: handleToggle };

          return React.cloneElement(child, additionalProps);
        }
        return child;
      })}
    </div>
  );
};
