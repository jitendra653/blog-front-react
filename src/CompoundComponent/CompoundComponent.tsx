import React from 'react';
import { Accordion, AccordionSection, AccordionHeader, AccordionContent } from './Accordion';

const App = () => (

    <>
    <h3>React Compound Component</h3>
  <Accordion>
    <AccordionSection index={0}>
      <AccordionHeader>Section 1</AccordionHeader>
      <AccordionContent>
        Content for Section 1
      </AccordionContent>
    </AccordionSection>
    <AccordionSection index={1}>
      <AccordionHeader>Section 2</AccordionHeader>
      <AccordionContent>
        Content for Section 2
      </AccordionContent>
    </AccordionSection>
  </Accordion></>
);

export default App;
