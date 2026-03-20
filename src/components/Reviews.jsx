import React from 'react';
import './Reviews.css';

const reviewsData = [
  { id: 1, name: "أحمد العبدالله", time: "14:30", message: "أفضل سيرفر جربته! ثبات تام وقت دوري الأبطال بدون تقطيع نهائياً 🔥" },
  { id: 2, name: "خالد بن محمد", time: "18:45", message: "جودة الـ 4K خرافية، والمكتبة تتحدث يومياً. شكراً لخدمتكم الممتازة 🤩" },
  { id: 3, name: "سالم الرشيدي", time: "21:10", message: "سرعة في التفعيل ودعم فني متجاوب دائماً.. أنصح الجميع بالاشتراك يعطيك العافية 💯" },
  { id: 4, name: "عمر الفاروق", time: "23:05", message: "فعلاً تستاهلون كل التقدير. المسلسلات الحديثة تنزل فوراً ومترجمة باحترافية 👍" },
  { id: 5, name: "عبدالرحمن", time: "10:15", message: "السيرفر ولا غلطة! التقطيع معدوم وأسعاركم الأفضل فالسوق 💛" }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">آراء <span className="text-yellow">عملائنا</span> في الواتساب</h2>
        
        <div className="marquee-container">
          <div className="marquee">
            {/* Render 3 times for a smooth infinite loop */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="marquee-content">
                {reviewsData.map(review => (
                  <div key={`${i}-${review.id}`} className="whatsapp-card">
                     <div className="wa-header">
                       <div className="wa-avatar"></div>
                       <div className="wa-name">{review.name}</div>
                     </div>
                     <div className="wa-body">
                       <p>{review.message}</p>
                       <div className="wa-meta">
                         <span className="wa-time">{review.time}</span>
                         <span className="wa-ticks">✔️✔️</span>
                       </div>
                     </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <p style={{textAlign: 'center', marginTop: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
          * هذه الرسائل مصممة بالكود لتشبه الواتساب كلياً للحفاظ على سرعة وأناقة الموقع، ويمكنك تغييرها لصور سكرين شوت حقيقية لاحقاً إذا فضلت ذلك.
        </p>
      </div>
    </section>
  );
};

export default Reviews;
