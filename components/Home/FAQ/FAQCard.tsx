import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function FAQCard() {
  return (
    <Accordion type="single" collapsible className='w-full text-white '>
  <AccordionItem value="item-1">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>Is it accessible?</AccordionTrigger>
    <AccordionContent  >
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-2">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>Is it accessible?</AccordionTrigger>
    <AccordionContent className='text-lg'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-1">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>Is it accessible?</AccordionTrigger>
    <AccordionContent className='text-lg'>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
  )
}

export default FAQCard