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
    <AccordionTrigger className='md:text-xl lg:text-2xl'>1. What is a text-to-image model?</AccordionTrigger>
    <AccordionContent  >
A text-to-image model is an AI system that generates images based on natural language descriptions (prompts).
 For example, if you type “a cat sitting on a skateboard in space”, the model produces a corresponding image.    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-2">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>2. How do I write effective prompts?</AccordionTrigger>
    <AccordionContent className='text-lg'>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Be descriptive (include subject, action, style, mood).</li>
        <li>Use keywords for style (e.g., realistic, anime, surreal, cinematic).</li>
        <li>Keep experimenting with prompt variations for better results.</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-3">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>3. Is it free to use?</AccordionTrigger>
    <AccordionContent className='text-lg'>
     It depends. Open-source models may be free to run locally, but cloud-hosted services usually charge per image, per token, or via subscription.
    </AccordionContent>
  </AccordionItem>


   <AccordionItem value="item-4">
    <AccordionTrigger className='md:text-xl lg:text-2xl'>4. What are the common use cases?</AccordionTrigger>
    <AccordionContent className='text-lg'>
     <ul className="list-disc pl-6 space-y-2">
  <li>Creative design & art generation</li>
  <li>Storytelling and visualization</li>
  <li>Marketing and advertising assets</li>
  <li>Game and film concept art</li>
  <li>Product mockups</li>
  <li>Education and research</li>
</ul>

    </AccordionContent>
  </AccordionItem>
</Accordion>


  )
}

export default FAQCard