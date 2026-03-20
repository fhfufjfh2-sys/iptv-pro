import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import CheckoutModal from './CheckoutModal';
import './Pricing.css';

const fallbackPlans = [
  { id: 1, name_ar: 'شهر واحد', price: 10, duration_months: 1, is_popular: false, features: ['أكثر من 15,000 قناة','مكتبة أفلام ضخمة','جودة 4K و FHD','بدون تقطيع','تحديثات يومية'] },
  { id: 2, name_ar: 'سنة كاملة (الذهبية)', price: 50, duration_months: 12, is_popular: true, features: ['أكثر من 15,000 قناة','مكتبة أفلام حصرية','جودة 4K/8K','سيرفرات VIP','تفعيل فوري','دعم فني 24/7'] },
  { id: 3, name_ar: '6 أشهر', price: 35, duration_months: 6, is_popular: false, features: ['جميع القنوات والدوريات','مكتبة أفلام ومسلسلات','جودة 4K و FHD','بدون تقطيع','تحديثات يومية'] },
];

const Pricing = () => {
  const [plans, setPlans] = useState(fallbackPlans);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase.from('plans').select('*').order('price');
      if (!error && data && data.length > 0) {
        const sorted = [
          data.find(p => p.duration_months === 1),
          data.find(p => p.is_popular),
          data.find(p => p.duration_months === 6),
        ].filter(Boolean);
        setPlans(sorted);
      }
      setLoading(false);
    };
    fetchPlans();
  }, []);

  const getFeatures = (plan) => {
    if (Array.isArray(plan.features)) return plan.features;
    try { return JSON.parse(plan.features); } catch { return []; }
  };

  return (
    <>
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">باقات <span className="text-yellow">الاشتراك</span></h2>

          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>جاري تحميل الباقات...</p>
          ) : (
            <div className="pricing-grid">
              {plans.map(plan => (
                <div key={plan.id} className={`pricing-card ${plan.is_popular ? 'popular' : ''}`}>
                  {plan.is_popular && <div className="popular-badge">الأكثر مبيعاً ⭐</div>}
                  <h3 className={`plan-name ${plan.is_popular ? 'text-yellow' : ''}`}>{plan.name_ar}</h3>
                  <div className={`plan-price ${plan.is_popular ? 'text-yellow' : ''}`}>
                    <span className="currency">$</span>{plan.price}
                    <span className="period">
                      /{plan.duration_months === 12 ? 'سنة' : plan.duration_months === 6 ? '6أشهر' : 'شهر'}
                    </span>
                  </div>
                  <ul className="plan-features">
                    {getFeatures(plan).map((f, i) => (
                      <li key={i}>✔️ {f}</li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${plan.is_popular ? 'btn-primary' : 'btn-outline'} plan-btn`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    {plan.is_popular ? 'احصل على العرض' : 'اشترك الآن'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </>
  );
};

export default Pricing;
