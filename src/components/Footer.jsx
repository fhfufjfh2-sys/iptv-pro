import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">
            IPTV<span className="text-yellow">PRO</span>
          </a>
          <p>أفضل خدمة بث تلفزيوني عبر الإنترنت في العالم العربي. جودة عالية بدقة 4K، ثبات تام وقت الذروة، ومكتبة أفلام ومسلسلات ضخمة متجددة يومياً.</p>
        </div>
        
        <div className="footer-links">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#hero">الرئيسية</a></li>
            <li><a href="#features">لماذا نحن؟</a></li>
            <li><a href="#pricing">الباقات والأسعار</a></li>
            <li><a href="#showcase">مكتبة المحتوى</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <p>📧 support@iptvpro.com</p>
          <p>📱 +971 50 123 4567</p>
          <div className="payment-methods">
             <span className="text-yellow" style={{fontSize: '0.9rem', marginTop: '10px', display: 'block'}}>نقبل جميع وسائل الدفع الآمنة</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة &copy; 2024 IPTV PRO</p>
      </div>
    </footer>
  );
};

export default Footer;
