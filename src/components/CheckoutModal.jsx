import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import './CheckoutModal.css';

const CheckoutModal = ({ plan, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  if (!plan) return null;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }
    setError('');
    setStatus('loading');

    const { error: dbError } = await supabase.from('orders').insert([{
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      plan_id: plan.id,
      status: 'pending',
    }]);

    if (dbError) {
      setStatus('error');
      setError('حدث خطأ، يرجى المحاولة مرة أخرى.');
    } else {
      setStatus('success');
    }
  };

  const getDuration = () => {
    if (plan.duration_months === 12) return 'سنة كاملة';
    if (plan.duration_months === 6) return '6 أشهر';
    return 'شهر واحد';
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        
        <button className="modal-close" onClick={onClose}>✕</button>

        {status === 'success' ? (
          /* ===== SUCCESS STATE ===== */
          <div className="success-state">
            <div className="success-icon">✅</div>
            <h2>تم استلام طلبك بنجاح!</h2>
            <p>شكراً <strong>{form.name}</strong>،</p>
            <p>سيتم إرسال رابط الدفع الخاص بك على البريد الإلكتروني:</p>
            <div className="email-badge">{form.email}</div>
            <p className="sub-note">خلال أقل من <strong className="text-yellow">15 دقيقة</strong> ستحصل على رابط الدفع وبعده يُفعَّل اشتراكك فوراً ⚡</p>
            <button className="btn btn-primary" style={{marginTop: '20px', width: '100%'}} onClick={onClose}>
              إغلاق
            </button>
          </div>
        ) : (
          /* ===== FORM STATE ===== */
          <>
            {/* Header */}
            <div className="modal-header">
              <div className="modal-icon">🛒</div>
              <h2>إتمام الاشتراك</h2>
              <p>أكمل بياناتك وسيتم إرسال رابط الدفع إليك</p>
            </div>

            {/* Plan Summary */}
            <div className="plan-summary">
              <div className="plan-summary-info">
                <span className="plan-summary-name">{plan.name_ar}</span>
                <span className="plan-summary-duration">{getDuration()}</span>
              </div>
              <div className="plan-summary-price">
                <span className="text-yellow">${plan.price}</span>
              </div>
            </div>

            {/* Form */}
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">👤 الاسم الكامل <span className="required">*</span></label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="محمد أحمد"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">📧 البريد الإلكتروني <span className="required">*</span></label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  dir="ltr"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">📱 واتساب (اختياري)</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="+966 5X XXX XXXX"
                  value={form.phone}
                  onChange={handleChange}
                  dir="ltr"
                />
              </div>

              {error && <div className="form-error">⚠️ {error}</div>}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '10px', fontSize: '1.2rem', padding: '16px' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '⏳ جاري إرسال الطلب...' : '🚀 أرسل طلب الاشتراك'}
              </button>

              <p className="modal-footer-note">
                🔒 بياناتك محمية وآمنة تماماً
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
