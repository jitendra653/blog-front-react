import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AccordionContextType {
  openSection: number | null;
  setOpenSection: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openSection, setOpenSection }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion');
  }
  return context;
};
