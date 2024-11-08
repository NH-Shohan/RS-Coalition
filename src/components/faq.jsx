import faqData from "@/data/faqData.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section className="container mx-auto max-w-7xl">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        FAQ
      </p>
      <h1 className="text-neutral-300">
        Questions regarding the way we operate
      </h1>

      <Accordion
        type="single"
        defaultValue="item-0"
        collapsible
        className="grid grid-cols-1 md:grid-cols-3 mt-10"
      >
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`border-neutral-700 p-6 text-neutral-300 transition-all duration-200 ${
              [0, 1, 3, 4, 6, 7].includes(index) && "border-b border-r"
            }`}
          >
            <AccordionTrigger className="text-lg font-semibold hover:text-blue-500">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-neutral-500">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
