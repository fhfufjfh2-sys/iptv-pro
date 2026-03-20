import React from 'react';
import './Features.css';

const featuresData = [
  { id: 1, title: "جودة 4K حقيقية", desc: "استمتع بأعلى دقة ممكنة لجميع قنواتك المفضلة بدون انقطاع.", icon: "📺" },
  { id: 2, title: "ثبات 99.9%", desc: "خوادم قوية تضمن لك مشاهدة مستقرة حتى في أوقات الذروة.", icon: "⚡" },
  { id: 3, title: "مكتبة ضخمة", desc: "أكثر من 100 ألف فيلم ومسلسل يتم تحديثها يومياً.", icon: "🎬" },
  { id: 4, title: "دعم جميع الأجهزة", desc: "يعمل على الشاشات الذكية، أندرويد، iOS، وأجهزة الكمبيوتر.", icon: "📱" },
  { id: 5, title: "تفعيل فوري", desc: "احصل على اشتراكك وابدأ المشاهدة فور إتمام الدفع.", icon: "🚀" },
  { id: 6, title: "دعم فني 24/7", desc: "فريق متخصص جاهز لمساعدتك في أي وقت.", icon: "👨‍💻" },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">لماذا تختار <span className="text-yellow">خدماتنا؟</span></h2>
        <div className="features-grid">
          {featuresData.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
