import React, { useState } from 'react';


function Counter() {
  // تعریف State: مقدار اولیه 0 است.
  const [count, setCount] = useState(0); 
  
  // تعریف تابع به‌روزرسانی
  const handleIncrement = () => {
    // تنها راه مجاز برای تغییر count، استفاده از تابع setCount است.
    setCount(count + 1); 
  };

  return (
    <div>
      <p>تعداد: {count}</p>
      <button onClick={handleIncrement}>
        شماره ما {count}
      </button>
    </div>
  );
}
export default Counter; // کامپوننت را صادر کنید.