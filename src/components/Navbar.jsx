import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          IPTV<span className="text-yellow">PRO</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero" className="active">الرئيسية</a></li>
          <li><a href="#features">المميزات</a></li>
          <li><a href="#pricing">الباقات</a></li>
          <li><a href="#showcase">المكتبة</a></li>
        </ul>
        <div className="nav-action">
          <a href="#pricing" className="btn btn-primary">اشترك الآن</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
