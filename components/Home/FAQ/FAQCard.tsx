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
    <AccordionTrigger className='md:text-xl lg:text-2xl'>What is a text-to-image model?</AccordionTrigger>
    <AccordionContent  >
A text-to-image model is an AI system that generates images based on natural language descriptions (prompts).
 For example, if you type “a cat sitting on a skateboard in space”, the model produces a corresponding image.    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-2">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>How do I write effective prompts?</AccordionTrigger>
    <AccordionContent className='text-lg'>
     1. Be descriptive (include subject, action, style, mood).<br/>
     2. Use keywords for style (e.g., realistic, anime, surreal, cinematic).<br/>
     3. Keep experimenting with prompt variations for better results.
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-1">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>Is it free to use?</AccordionTrigger>
    <AccordionContent className='text-lg'>
     It depends. Open-source models may be free to run locally, but cloud-hosted services usually charge per image, per token, or via subscription.
    </AccordionContent>
  </AccordionItem>
</Accordion>
  )
}

export default FAQCard