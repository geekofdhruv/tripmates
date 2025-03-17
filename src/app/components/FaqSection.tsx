"use client"

import { useState } from 'react';
import Head from 'next/head';

interface FAQItemProps { question: string; answer: string; }
interface FAQSectionProps { 
  faqItems?: FAQItemProps[]; 
  sidebarText?: string; 
  questionText?: string;
  buttonText?: string; 
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 rounded-lg relative" style={{ backgroundColor: 'rgba(255, 255, 255, 0.22)', backdropFilter: 'blur(31.8px)', border: '1px solid #FBFBFB' }}>
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-medium text-black">{question}</h3>
        <div className="flex items-center justify-center font-bold" style={{ width: '20px', height: '20px', borderRadius: '2px', borderWidth: '2px', borderColor: '#1C1C1C', color: '#1C1C1C' }}>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && <div className="p-4 pt-0 text-gray-600"><p>{answer}</p></div>}
    </div>
  );
};

const DEFAULT_FAQS: FAQItemProps[] = [
  { question: "The expense windows adapted sir. Wrong widen drawn.", answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her." },
  { question: "Six curiosity day assurance bed necessary?", answer: "Detailed answer to the second question would go here." },
  { question: "Produce say the ten moments parties?", answer: "Detailed answer to the third question would go here." },
  { question: "Simple innate summer fat appear basket his desire joy?", answer: "Detailed answer to the fourth question would go here." },
  { question: "Outward clothes promise at gravity do excited?", answer: "Detailed answer to the fifth question would go here." }
];

const FAQSection = ({ 
  faqItems = DEFAULT_FAQS,
  sidebarText = "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
  questionText = "Do you have more questions?",
  buttonText = "Shoot a Direct Mail"
}: FAQSectionProps) => {
  const cardStyle = { 
    backgroundColor: 'rgba(255, 255, 255, 0.22)', 
    backdropFilter: 'blur(31.8px)', 
    border: '1px solid #FBFBFB' 
  };
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=DM+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <style jsx global>{`@font-face { font-family: 'Affectionately Yours'; src: url('/fonts/AffectionatelyYours.woff2') format('woff2'); font-weight: 400; }`}</style>
      </Head>
      <div className="py-12 px-6 md:px-12" style={{ backgroundColor: '#DFE6F2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 style={{ fontFamily: "'Affectionately Yours', 'Dancing Script', cursive", fontWeight: 400, fontSize: '71px', lineHeight: '76px', letterSpacing: '-3%', color: '#000000' }}>
              Frequently<br />Asked Questions
            </h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              {faqItems.map((item, i) => <FAQItem key={i} {...item} />)}
            </div>
            
            <div className="w-full lg:w-1/3 relative rounded-lg" style={{ ...cardStyle, width: '401px', height: '512px', padding: '42px 36px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ width: '67px', height: '63px', marginBottom: '20px', backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 67 63\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 50.92V61L25.0051 50.92H56C61.5228 50.92 66 46.4428 66 40.92V11C66 5.47715 61.5228 1 56 1H11C5.47715 1 1 5.47715 1 11V40.92C1 46.4428 5.47715 50.92 11 50.92Z\" fill=\"black\"/></svg>')", backgroundRepeat: 'no-repeat' }} />
              
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', lineHeight: '31px', width: '100%', textAlign: 'center', marginBottom: '20px' }}>{questionText}</h2>
              
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', lineHeight: '28px', textAlign: 'center', color: '#4A4A4A', marginBottom: '40px' }}>{sidebarText}</p>
              
              <button style={{ width: '337px', height: '76px', backgroundColor: '#FA7436', borderRadius: '36px', border: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '20px', lineHeight: '31px', letterSpacing: '-2%', color: 'white', textAlign: 'center' }}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
