// ProductList.jsx - مسئول نمایش لیست محصولات

import React from 'react'; 
// نیازی به وارد کردن CSS اصلی نیست، مگر اینکه استایل‌های مخصوص به خود را داشته باشد.

// کامپوننت ProductList
function ProductList({ products, onAddToCart }) {
  // دریافت دو Prop: لیست داده‌ها (products) و تابع (onAddToCart)
  
  const totalProducts = products.length;

  return (
    <div className="product-list">
      <h2>لیست محصولات ({totalProducts} محصول)</h2>

      {/* منطق شرطی برای نمایش لیست یا پیام خالی */}
      {products.length === 0 ? (
        <p className="empty-message">محصولی یافت نشد</p>
      ) : (
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>قیمت: {product.price.toLocaleString()} تومان</p>
              <button
                // هنگام کلیک، تابع Prop دریافتی را فراخوانی کرده و محصول را به والد برمی‌گرداند.
                onClick={() => onAddToCart(product)}
                className="add-button"
              >
                افزودن به سبد خرید
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList; // کامپوننت را صادر کنید.
