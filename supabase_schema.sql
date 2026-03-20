-- ============================================================
-- IPTV PRO - Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- 1. جدول الباقات (plans)
CREATE TABLE IF NOT EXISTS plans (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration_months INTEGER NOT NULL,
  is_popular BOOLEAN DEFAULT FALSE,
  features JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- إضافة الباقات الافتراضية
INSERT INTO plans (name, name_ar, price, duration_months, is_popular, features) VALUES
('Monthly', 'شهر واحد', 10.00, 1, FALSE, '["أكثر من 15,000 قناة","مكتبة أفلام ضخمة","جودة 4K و FHD","بدون تقطيع","تحديثات يومية"]'),
('Yearly', 'سنة كاملة (الذهبية)', 50.00, 12, TRUE, '["أكثر من 15,000 قناة","مكتبة أفلام حصرية","جودة 4K/8K","سيرفرات VIP","تفعيل فوري","دعم فني 24/7"]'),
('6 Months', '6 أشهر', 35.00, 6, FALSE, '["جميع القنوات والدوريات","مكتبة أفلام ومسلسلات","جودة 4K و FHD","بدون تقطيع","تحديثات يومية"]');

-- 2. جدول طلبات الاشتراك (orders)
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  plan_id INTEGER REFERENCES plans(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'expired', 'cancelled')),
  activation_code TEXT UNIQUE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- 3. جدول الرسائل والتواصل (messages)  
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. تفعيل Row Level Security
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- حذف السياسات القديمة إن وجدت ثم إعادة إنشائها
DROP POLICY IF EXISTS "Plans are viewable by everyone" ON plans;
DROP POLICY IF EXISTS "Anyone can insert orders" ON orders;
DROP POLICY IF EXISTS "Anyone can insert messages" ON messages;

-- السماح للجميع بقراءة الباقات
CREATE POLICY "Plans are viewable by everyone" ON plans FOR SELECT USING (TRUE);

-- السماح بإضافة الطلبات للجميع
CREATE POLICY "Anyone can insert orders" ON orders FOR INSERT WITH CHECK (TRUE);

-- السماح بإضافة الرسائل للجميع
CREATE POLICY "Anyone can insert messages" ON messages FOR INSERT WITH CHECK (TRUE);
