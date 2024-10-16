'use client';
import { title } from '@/components/primitives';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

export default function FaqPage() {
  const faq = [
    {
      question: 'What is Welby?',
      answer: 'Welby is an AI-powered wellness platform that combines the Big Five personality test with advanced AI analysis to provide in-depth insights into your personality and personalized wellness recommendations.'
    },
    {
      question: 'What is the Big Five personality test?',
      answer: 'The Big Five personality test is a widely recognized psychological assessment that measures five core personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Welby uses this test as the foundation for its personalized insights.'
    },
    {
      question: 'How long does the Big Five test on Welby take?',
      answer: 'The Big Five personality test on Welby contains 120 questions and is estimated to take about 10 minutes to complete.'
    },
    {
      question: 'How does Welby\'s AI analysis work?',
      answer: 'After you complete the Big Five personality test, Welby\'s AI model processes your responses to generate personalized insights and wellness recommendations tailored to your unique personality profile.'
    },
    {
      question: 'Is my data kept confidential on Welby?',
      answer: 'Yes, we take your privacy seriously. All your test responses and personal information on Welby are encrypted and stored securely. We do not share your individual data with third parties.'
    },
    {
      question: 'Can I retake the Big Five test on Welby?',
      answer: 'Yes, you can retake the test on Welby at any time. However, we recommend waiting at least a few months between tests to allow for potential changes in your personality or circumstances.'
    },
    {
      question: 'How accurate are the AI-generated insights from Welby?',
      answer: 'Welby\'s AI model is trained on extensive psychological research and data related to the Big Five personality traits. While the insights are highly accurate for most users, remember that they are general recommendations and not a substitute for professional medical or psychological advice.'
    },
    {
      question: 'Can I share my Welby results with others?',
      answer: 'Yes, after receiving your Big Five test results and AI-generated insights on Welby, you\'ll have the option to share a summary via email or social media. You control what information is shared.'
    },
    {
      question: 'Is there a mobile app for Welby?',
      answer: 'Currently, Welby is web-based and optimized for both desktop and mobile browsers. We\'re working on dedicated mobile apps and will announce their release soon.'
    },
    {
      question: 'How often should I take the Big Five test on Welby for best results?',
      answer: 'We recommend taking the Big Five test on Welby every 6-12 months to track changes in your personality and receive updated insights. Major life events might also be good times to reassess.'
    }
  ];
  return (
    <div>
      <h1 className={title()}>Frequently asked questions.</h1>
      <Accordion className='mt-10'>
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            textValue={item.question}
            title={
              <span className='text-foreground text-large font-medium'>
                {item.question}
              </span>
            }
          >
            <div className='py-2 pt-0 pb-6 text-base text-default-500'>
              {item.answer}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
