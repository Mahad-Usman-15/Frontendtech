import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

export default function FAQS(){
    const faqs = [
        {
            question: "What is the warranty on this product?",
            answer: "This product comes with a 1-year limited warranty."
        },
        {
            question: "What is the return policy?",
            answer: "We offer a 30-day return policy for unopened products."
        },
        {
            question: "Is this product compatible with my device?",
            answer: "Please check the product specifications for compatibility information."
        },
        {
            question: "How long does the battery last?",
            answer: "The battery lasts for approximately 8 hours on a single charge."
        },
        {
            question: "Does this product come with a charger?",
            answer: "Yes, a charger is included in the box."
        }
    ];
    return(
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2   w-full gap-10">
            <h1 className="text-3xl font-semibold ">Frequently Asked <br /> Questions</h1>
            <div className="flex flex-col items-start  gap-5 w-96">
            {faqs.map((faq,index)=>(
            <Accordion type="single" collapsible>
  <AccordionItem key={index} value="item-1">
    <AccordionTrigger>Q:{faq.question}</AccordionTrigger>
    <AccordionContent>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
 ))}
        </div>
        </div>
      
    )
}