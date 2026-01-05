// App.jsx - مسئول نگهداری داده‌ها و منطق اصلی

import React, { useState, useReducer } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import ProductList from './components/ProductList';
import PropTypes from 'prop-types';
import Counter from './components/counter';
import Counter2 from './components/counter2';
import UserForm from './components/UserForm';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
function App() {
  function UserProfile({ name, age, isAdmin }) {
    return (
      <div>
        <h1>نام: {name}</h1>
        <p>سن: {age}</p>
        <p>وضعیت مدیریت: {isAdmin ? "بله" : "خیر"}</p>
      </div>
    );
  }
  UserProfile.propTypes = {
    name: PropTypes.string.isRequired, // حتماً باید رشته باشد و اجباری است
    age: PropTypes.number,             // باید عدد باشد
    isAdmin: PropTypes.bool            // باید بولین باشد
  };

  UserProfile.defaultProps = {
    age: 20,
    isAdmin: false
  };


  const products = [
    { id: 1, name: "لپ‌تاپ ایسوس", price: 45000000 },
    { id: 2, name: "موس گیمینگ", price: 1200000 },
    { id: 3, name: "کیبورد مکانیکی", price: 3500000 },
  ];

  // ۲. تعریف تابع عملیاتی (Logic) در والد
  const handleAction = (name) => {
    console.log("پیام از والد: دکمه مربوط به " + name + " کلیک شد.");
  };

  const sampleUsers = [
    // ... محصولات ثابت
  ];
  const [cartItems, setCartItems] = useState([]); // 👈 State جدید
  const [userItems, setUserItems] = useState([]);

  const handleAddToCart = (user) => {
    setCartItems(prevItems => [...prevItems, user]);
    console.log(`محصول "${user.name}" برای افزودن به سبد در نظر گرفته شد.`);
  }


  const handleAddUser = (user) => {
    // Correctly update the state by spreading existing items and adding the new one
    setUserItems(prevItems => [...prevItems, user]);
  };


  // ۳. منطق عملیاتی (Logic): تابع نمایش محتوای سبد
  const handleShowCart = () => {
    if (cartItems.length === 0) {
      alert("سبد خرید شما خالی است.");
    } else {
      // از join برای نمایش لیست آیتم‌ها استفاده می‌کنیم.
      const cartContent = cartItems.map(item => item.name).join('، ');
      alert(`محصولات داخل سبد: \n${cartContent}`);
      console.log("محتوای سبد خرید:", cartItems);
    }
  };

  const UserList = () => {
    return (
      <div className='mt-10'>
        <h3>لیست کاربران:</h3>
        {userItems.length === 0 ? (
          <p>کاربری وجود ندارد</p>
        ) : (
          <ul>
            {userItems.map((item) => (
              <li key={item.id}>
                {item.name} {item.fname}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }


  // ۲. تعریف useReducer: مقدار اولیه یک آرایه خالی است
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      // ۳. ارسال دستور (dispatch) به Reducer
      dispatch({ type: 'ADD_TODO', payload: e.target.value });
      e.target.value = '';
    }
  };


  return (
    <div>
      <h1>
        لیست استاتید دانشگده
      </h1>
      <UserCard name="دکتر رضایی" job="استاد هوش مصنوعی" isOnline={true} />
      <UserCard name="مهندس علوی" job="مدرس پایتون" isOnline={false} />
      <h2>فروشگاه دانشکده</h2>
      <ProductList products={products} onBtnClick={handleAction} />
      <UserProfile />
      <Counter />
      <Counter2 />

      <hr />
      <h1>🛍️ فروشگاه کوچک من</h1>

      {/* نمایش تعداد آیتم‌های سبد خرید در بالای صفحه */}
      <p>تعداد آیتم‌های سبد خرید: <strong>{cartItems.length}</strong></p>

      {/* دکمه جدید برای دیدن محتوای سبد خرید */}
      <button onClick={handleShowCart} className="cart-button">
        مشاهده سبد خرید
      </button>

      {/* فراخوانی و ارسال Props */}
      <hr />
      <UserForm onAddUser={handleAddUser} />
      <UserList />
      <div style={{ padding: '20px' }}>
        <h2>لیست کارهای من</h2>
        <input onKeyDown={handleAdd} placeholder="کار جدید را بنویس و اینتر بزن..." />

        <ul>
          {todos.map(todo => (
            /* ۴. فراخوانی کامپوننت فرزند */
            <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </div>
  )

}

export default App