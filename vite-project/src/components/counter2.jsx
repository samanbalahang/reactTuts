import React, { useState } from 'react';

function Counter2() {
  // ۱. تعریف State: 
  // count: مقدار فعلی شمارنده
  // setCount: تابع مجاز برای به‌روزرسانی مقدار count
  const [count, setCount] = useState(0); 
  
  // --- توابع مدیریت رویدادها ---

  // تابع افزایش: یک واحد به مقدار فعلی اضافه می‌کند.
  const handleIncrement = () => {
    // setCount را با مقدار جدید (count + 1) فراخوانی می‌کنیم.
    setCount(count + 1); 
  };

  // تابع کاهش: یک واحد از مقدار فعلی کم می‌کند.
  const handleDecrement = () => {
    // مطمئن می‌شویم که count از 0 کمتر نشود (اختیاری)
    if (count > 0) {
      setCount(count - 1);
    }
    // اگر نمی‌خواهید محدودیت بگذارید: setCount(count - 1);
  };

  // تابع ریست: مقدار شمارنده را به مقدار اولیه (0) بازمی‌گرداند.
  const handleReset = () => {
    setCount(0); 
  };

  // ------------------------------

  return (
    <div className="counter-container" style={{ margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>شمارنده پیشرفته (Counter)</h3>
      
      {/* نمایش مقدار فعلی State */}
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>مقدار فعلی: {count}</p> 

      {/* نمایش مقدار در یک ورودی فقط‌خواندنی */}
      <input 
        type="number" 
        value={count} 
        readOnly 
        style={{ padding: '8px', fontSize: '16px', marginBottom: '10px' }}
      />

      {/* دکمه‌های عملیاتی */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={handleDecrement} 
          style={{ padding: '10px 15px', fontSize: '18px', cursor: 'pointer' }}
        >
          - کاهش
        </button>
        
        <button 
          onClick={handleReset} 
          style={{ padding: '10px 15px', fontSize: '18px', cursor: 'pointer' }}
        >
          🔄 ریست
        </button>
        
        <button 
          onClick={handleIncrement} 
          style={{ padding: '10px 15px', fontSize: '18px', cursor: 'pointer' }}
        >
          + افزایش
        </button>
      </div>
    </div>
  );
}

export default Counter2;