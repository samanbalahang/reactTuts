import React, { useState, useEffect } from 'react';

const TitleManager = () => {
  const [name, setName] = useState('');

  // استفاده از useEffect برای تغییر عنوان صفحه
  useEffect(() => {
    // دسترسی مستقیم به DOM برای تغییر عنوان تب
    document.title = name ? `سلام ${name}` : "به آموزش ری‌اکت خوش آمدید";

    // نکته آموزشی: این کد خارج از ری‌اکت اجرا می‌شود
    console.log("عنوان مرورگر به روز شد!");
    
  }, [name]); // این افکت فقط وقتی اجرا می‌شود که مقدار name تغییر کند

  return (
    <div style={{ direction: 'rtl', padding: '20px', textAlign: 'center' }}>
      <h3>نام خود را وارد کنید تا عنوان تب عوض شود:</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="نام شما..."
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
      />
      <p style={{ marginTop: '20px' }}>
        خروجی فعلی در تب مرورگر: <strong>{document.title}</strong>
      </p>
    </div>
  );
};

export default TitleManager;