import React, { useState } from 'react';

function UserForm({onAddUser }) {
    // تعریف وضعیت (State) برای فیلدهای ورودی
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // جلوگیری از ریفرش شدن صفحه

        // بررسی اینکه فیلدها خالی نباشند
        if (!name || !fname) {
            alert("لطفاً تمامی فیلدها را پر کنید");
            return;
        }

        // ایجاد شیء کاربر جدید
        const newUser = {
            id: Date.now(), // ایجاد یک شناسه یکتا با استفاده از زمان
            name: name,
            fname: fname
        };

        // ارسال کاربر جدید به کامپوننت والد
        onAddUser(newUser);

        // خالی کردن فیلدها بعد از ثبت
        setName('');
        setFname('');
    };

    return (
        <div className="user-form-container">
            <h2>ایجاد کاربر جدید</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <div className="input-group">
                    <label>نام:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="نام را وارد کنید..."
                    />
                    <br />
                    <label>نام خانوادگی:</label>
                    <input 
                        type="text" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)} 
                        placeholder="نام را وارد کنید..."
                    />
                </div>

               
                <button type="submit" className="submit-button">
                    افزودن کاربر به لیست
                </button>
            </form>
        </div>
    );
}

export default UserForm;