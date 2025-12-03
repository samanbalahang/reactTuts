import './App.css'
// App.jsx
import './App.css';

// کامپوننت ProductList
function ProductList({ products, onAddToCart }) {
  const totalProducts = products.length;

  return (
    <div className="product-list">
      <h2>لیست محصولات ({totalProducts} محصول)</h2>

      {products.length === 0 ? (
        <p className="empty-message">محصولی یافت نشد</p>
      ) : (
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>قیمت: {product.price.toLocaleString()} تومان</p>
              <button
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


function App() {
  // داده‌های نمونه برای محصولات
  const sampleProducts = [
    { id: 1, name: "لپ‌تاپ ایسوس", price: 25000000 },
    { id: 2, name: "ماوس بی‌سیم", price: 500000 },
    { id: 3, name: "کیبورد مکانیکی", price: 1200000 },
    { id: 4, name: "مانیتور 24 اینچ", price: 8000000 }
  ];
  // تابع مدیریت افزودن به سبد خرید
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
        <ProductList
          products={sampleProducts}
          onAddToCart={handleAddToCart}
        />
      </div>
    </>
  )
}

export default App
