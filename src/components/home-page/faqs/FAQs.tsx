import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  AccordionButton,
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  FAQContainer,
  Title,
} from "./styled.components";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does this work?",
    answer:
      "Our service uses TikTok's official API to safely recover your deleted videos. Simply enter your username, and we'll scan for any recoverable content associated with your account.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, your data is completely safe. We use industry-standard encryption and never store your personal information. All recovery processes are performed securely and in compliance with TikTok's terms of service.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "The recovery process typically takes 5-10 minutes, depending on the number of videos being recovered and current server load. You'll receive a notification as soon as the process is complete.",
  },
  {
    question: "What information do you need?",
    answer:
      "We only need your TikTok username to begin the recovery process. No passwords or personal information are required.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      <AccordionContainer>
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`content-${index}`}
            >
              {item.question}
              <ChevronDown size={20} />
            </AccordionButton>
            <AccordionContent
              id={`content-${index}`}
              isOpen={openIndex === index}
            >
              <section aria-labelledby={`button-${index}`}>
                {item.answer}
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </FAQContainer>
  );
}
