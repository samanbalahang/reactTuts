// App.jsx - مسئول نگهداری داده‌ها و منطق اصلی

import React, { useState, useReducer } from 'react';
import UserForm from './components/UserForm';
import WpPage from './components/WpPage';
import TitleManager from './components/TitleManager';
import './App.css';

function App() {
    // آدرس یکی از برگه‌های سایت وردپرسی خود را اینجا وارد کنید
    const targetPageUrl = "https://katibehnaji.com/wp-json/wp/v2/pages?slug=gift";
    // تعریف وضعیت برای لیست کاربران (در ابتدا خالی است)
    const [userItems, setUserItems] = useState([]);
    // تابعی برای اضافه کردن کاربر جدید به لیست قبلی
    const handleAddUser = (newUser) => {
        setUserItems(prevItems => [...prevItems, newUser]);
    };

    return (
        <div className="container">
            <h1>مدیریت کاربران</h1>

            {/* ارسال تابع به عنوان Prop به فرم */}
            <UserForm onAddUser={handleAddUser} />

            {/* نمایش لیست کاربران */}
            <div className="user-list">
                {userItems.length === 0 ? (
                    <p>هنوز کاربری ثبت نشده است.</p>
                ) : (
                    <ul>
                        {userItems.map((user) => (
                            <li key={user.id}>
                                {user.name} {user.fname}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
                <h2>آموزش اتصال به وردپرس با useEffect</h2>
            </header>

            <main>
                <WpPage pageUrl={targetPageUrl} />
            </main>
            <div className="App">
                <TitleManager />
            </div>
        </div>
    )
}

export default App