import React, { useState, useEffect } from 'react';

const WpPage = ({ pageUrl }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ۱. استخراج اسلاگ (Slug) از آدرس URL
    // مثلا از "https://site.com/about-us/" کلمه "about-us" را جدا می‌کند
    // const slug = pageUrl.replace(/\/$/, "").split('/').pop();

    // // ۲. آدرس API وردپرس برای برگه ها
    // const apiUrl = `https://katibehnaji.com/wp-json/wp/v2/pages?slug=${slug}`;
    const slug = pageUrl;
    const apiUrl = `${slug}`;

    const fetchPage = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.length > 0) {
          setPageData(data[0]); // وردپرس داده ها را به صورت آرایه میفرستد
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [pageUrl]); // هر زمان آدرس تغییر کند، useEffect دوباره اجرا می‌شود

  if (loading) return <p style={{ textAlign: 'center' }}>در حال بارگذاری اطلاعات...</p>;
  if (!pageData) return <p style={{ textAlign: 'center' }}>برگه‌ای پیدا نشد.</p>;

  return (
    <div style={{ direction: 'rtl', padding: '20px', lineHeight: '1.8' }}>
      <h1 dangerouslySetInnerHTML={{ __html: pageData.title.rendered }} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
    </div>
  );
};

export default WpPage;