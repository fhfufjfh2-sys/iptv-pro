import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  { question: "هل يعمل الاشتراك في جميع الدول؟", answer: "نعم! اشتراكاتنا تعمل في جميع أنحاء العالم، كل ما تحتاجه هو اتصال بالإنترنت فقط للحصول على البث المباشر." },
  { question: "ما هي الأجهزة التي تدعمونها؟", answer: "ندعم جميع الأجهزة الذكية بلا استثناء: شاشات ساسمونج وإل جي (Samsung, LG)، أجهزة الآندرويد بوكس، أبل تي في (Apple TV)، الهواتف الذكية (iOS و Android)، بالإضافة لأجهزة الكمبيوتر." },
  { question: "كم سرعة الإنترنت المطلوبة للتشغيل بدون تقطيع؟", answer: "نوصي بسرعة إنترنت لا تقل عن 15 ميجابت/ثانية (15 Mbps) لضمان الحصول على أفضل تجربة مشاهدة لقنوات الـ 4K و FHD بسلاسة تامة." },
  { question: "هل يمكنني تشغيل الاشتراك في أكثر من جهاز؟", answer: "الاشتراك البلاتيني الأساسي مخصص ليعمل على جهاز واحد في نفس الوقت لتجنب التقطيع، ولكن يمكنك تفعيله على عدة أجهزة في منزلك والتنقل بينهم بسهولة." },
  { question: "هل تقدمون ضمان استرداد للمبالغ؟", answer: "بالتأكيد! رضاكم هو همنا الأول. نضمن لك استرداد أموالك خلال 24 ساعة من الاشتراك إذا واجهت مشكلة تقنية لم يتمكن الدعم الفني المتواجد 24/7 من حلها." },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">الأسئلة <span className="text-yellow">الشائعة</span></h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
               key={index} 
               className={`faq-item ${activeIndex === index ? 'active' : ''}`}
               onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                 <h3>{faq.question}</h3>
                 <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                 <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
