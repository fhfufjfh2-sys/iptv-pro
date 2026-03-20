import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">🌟 الجودة الفائقة للمحتوى المتميز</div>
          <h1 className="hero-title">
            تلفزيون المستقبل <br /> <span className="text-yellow">بين يديك الآن</span>
          </h1>
          <p className="hero-desc">
            استمتع بأكثر من 15,000 قناة حية، وأضخم مكتبة أفلام ومسلسلات متجددة يومياً. 
            بدون تقطيع، بدقة 4K فعلية، ودعم فني على مدار الساعة لتجربة مشاهدة لا تُنسى.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-primary">ابدأ تجربتك الآن</a>
            <a href="#features" className="btn btn-outline">اكتشف المميزات</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
