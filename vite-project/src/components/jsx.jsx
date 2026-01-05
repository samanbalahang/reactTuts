import React from 'react';

function Greeting() {
    const userName = "علی";
    const currentYear = 2024;

    return (
        <div>
            <h1>سلام، {userName}!</h1>
            <p>سال جاری: {currentYear}</p>
            <p>محاسبه: {5 * 10}</p>
        </div>
    );

}
function DisplayMessage(){
    const getGreeting = ()=>{
        const hour = new Date().getHours();
        if(hour < 12) return "صبح بخیر";
        if (hour < 18) return "ظهر بخیر";
        return "عصر بخیر";
    };
    return <p>{getGreeting()}</p>;
}

function DynamicImage(){
    const imageUrl = "images/a.jpg";
    const altText  = "مشکی";

    return <img src={imageUrl} alt={altText} />
}

function ClickExample(){
    const handleClick=()=>{
        console.log("دکمه کلیک شد!");        
    }
    return (
        <div>
            <button onClick={handleClick}>
                کلیک کن
            </button>
            <button onClick={()=> console.log("کلیک مستقیم!")}>
                کلیک مستقیم
            </button>
        </div>
    )
}

function InputExample() {
    const handleChange = (event)=>{
        console.log("مقدار جدید", event.target.value);      
    }
    return (
        <div>
            <input 
            type="text"
            onChange={handleChange}
            placeholder='متن شما!'
            />
        </div>
    )
}


function ConditionalDispaly(){
    const isLoggedIn = true;
    const hasMessages = false;
    return(
        <div>
            {isLoggedIn && <p>خوشآمد</p>}
            {hasMessages && <p>پیام جدید دارید</p>}
            {isLoggedIn && !hasMessages && (
                <p>شما پیام جدیدی ندارید</p>
                )
                }
        </div>
    )
}

function UserStatus(){
    const isPremium = true;
    return(
        <div>
            <p>
                وضعیت حساب:
                {isPremium ? "کاربر معمولی" : "🏆کاربر ویژه "}
            </p>
            {isPremium ? (
                <div>
                    <h3>
                        امکانات ویژه
                    </h3>
                    <ul>
                        <li>
                            امکان یک
                        </li>
                        <li>
                            امکان دو
                        </li>
                    </ul>
                </div>
            ):(
                <button>
                    افتتاح حساب
                </button>
            )}
        </div>
    )
}


function MessageComponent(){
    const isLoading = true;

    let content;
    if(isLoading){
        content = <p>درحال بارگزاری...</p>;
    }else{
        content = <p>محتوا اصلی</p>;
    }
    return <div>{content}</div>;
}

function SimpleList(){
    const color = ["yellow","blue","green","red"];
    return (
        <ul>
            {color.map((color,index)=>(
                <li key={index}>{color}</li>
            ))}
        </ul>
    )
}

function StudentList(){
    const student = [
        { id:1 , name: "علی رضایی" , grade : 18.5},
        { id:2 , name: "مریم محمدی" , grade : 19.2},
        { id:3 , name: "حسین کریمی" , grade : 17.8},
    ]
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        ردیف
                    </th>
                    <th>
                        نام
                    </th>
                    <th>
                        نمره
                    </th>
                </tr>
            </thead>
            <tbody>
                {student.map((student,index)=>{
                    return(
                        <tr key={student.id}>
                            <td>
                                {index +1}
                            </td>
                            <td>
                                {student.name}
                            </td>
                            <td>
                                {student.grade}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


function FilteredList() {
  const products = [
    { id: 1, name: "لپ‌تاپ", price: 15000000, inStock: true },
    { id: 2, name: "موبایل", price: 8000000, inStock: false },
    { id: 3, name: "تبلت", price: 6000000, inStock: true },
    { id: 4, name: "هدفون", price: 1500000, inStock: true },
  ];
  
  // فیلتر محصولات موجود
  const availableProducts = products.filter(product => product.inStock);
  
  // مرتب‌سازی بر اساس قیمت
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  
  return (
    <div>
      <h3>محصولات موجود:</h3>
      <ul>
        {availableProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()} تومان
          </li>
        ))}
      </ul>
    </div>
  );
}


function Thejsx() {
    return (
        <>
            <h1>
                سلام دنیا!
            </h1>
            <form action="#">
                <label htmlFor="">
                    نام
                </label>
                <input type="text" name='username' />
            </form>
            <Greeting />
            <DisplayMessage />
            <DynamicImage  />
            <ClickExample />
            <InputExample />
            <ConditionalDispaly />
            <UserStatus />
            <MessageComponent />
            <SimpleList />
            <StudentList />
        </>
    )
}
export default Thejsx;