// App.jsx - مسئول نگهداری داده‌ها و منطق اصلی

import React from 'react';
import './App.css';
// ۱. وارد کردن کامپوننت فرزند از مسیر جدید
import ProductList from './components/ProductList'; 
import Counter  from './components/counter';
import Counter2 from './components/counter2';

function App() {
  // داده‌های نمونه برای محصولات (Data Source)
  const sampleProducts = [
    { id: 1, name: "لپ‌تاپ ایسوس", price: 25000000 },
    { id: 2, name: "ماوس بی‌سیم", price: 500000 },
    { id: 3, name: "کیبورد مکانیکی", price: 1200000 },
    { id: 4, name: "مانیتور 24 اینچ", price: 8000000 }
  ];
  
  // تابع مدیریت افزودن به سبد خرید (Logic Source)
  const handleAddToCart = (product) => {
    alert(`محصول "${product.name}" به سبد خرید اضافه شد!`);
    console.log("محصول اضافه شده:", product);
  };
  
  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <p>این اولین برنامه React من است</p>
        <div className="card">
          <button onClick={() => alert('سلام React!')}>
            کلیک کن
          </button>
        </div>
        
        {/* ۲. استفاده از کامپوننت وارد شده و ارسال Props (جریان داده یک‌طرفه) */}
        <ProductList
          products={sampleProducts}
          onAddToCart={handleAddToCart}
        />
        <hr />
        <Counter/>
        <hr />
        <Counter2 />
      </div>
    </>
  )
}

export default App