import React from "react";

const About: React.FC = () => (
  <div className="container mx-auto p-6 mt-24 space-y-8">
    <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">
      درباره کتابخانه دیجیتال ما
    </h1>

    <section className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">هدف پروژه</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        این پروژه با هدف ایجاد یک کتابخانه دیجیتال مدرن طراحی شده است تا کاربران بتوانند به راحتی کتاب‌ها و منابع آموزشی را مرور، مطالعه و دنبال کنند.
        تمرکز اصلی بر تجربه کاربری سریع، ریسپانسیو و جذاب با استفاده از تکنولوژی‌های مدرن است.
      </p>
    </section>

    <section className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">ویژگی‌ها و امکانات</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>مرور کتاب‌ها و مشاهده جزئیات هر کتاب بدون رفرش صفحه.</li>
        <li>دسته‌بندی و جستجوی پیشرفته برای یافتن سریع کتاب‌ها.</li>
        <li>پیشنهاد کتاب‌های مشابه بر اساس دسته‌بندی.</li>
        <li>صفحات SPA شامل Home, About, Contact و جزئیات کتاب‌ها.</li>
        <li>ریسپانسیو و طراحی مدرن با Tailwind CSS و TypeScript.</li>
        <li>مدیریت وضعیت‌ها با Zustand برای ذخیره جستجو و فیلترها بین صفحات.</li>
        <li>کد اسپلیتینگ و Lazy Loading برای بهینه‌سازی عملکرد.</li>
      </ul>
    </section>

    <section className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">تکنولوژی‌های استفاده شده</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>ReactJS + TypeScript برای ساخت SPA حرفه‌ای و Typed.</li>
        <li>React Router DOM برای مدیریت مسیرهای داینامیک و ناوبری بدون رفرش.</li>
        <li>Tailwind CSS برای طراحی مدرن و ریسپانسیو.</li>
        <li>Zustand برای مدیریت ساده و موثر State.</li>
        <li>Lazy Loading و React Suspense برای بهینه‌سازی کد و کاهش حجم اولیه.</li>
        <li>قابلیت تست با Jest و React Testing Library (قابل اضافه کردن).</li>
      </ul>
    </section>

    <section className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">چرا این پروژه حرفه‌ای است</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        این پروژه نمونه‌ای واقعی است که توانایی شما را در:
        <span className="font-semibold"> طراحی SPA، مدیریت State، ریسپانسیو کردن صفحات و استفاده از تکنولوژی‌های مدرن وب</span> نشان می‌دهد.
        این ویژگی‌ها باعث می‌شود برای رزومه و پورتفولیو کاملاً مناسب باشد.
      </p>
    </section>

    <section className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">آینده و توسعه</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        این پروژه کاملاً قابل توسعه است و می‌توان امکاناتی مانند:
        <span className="font-semibold"> ورود کاربران، علاقه‌مندی‌ها، سبد خرید، API واقعی و مدیریت کتاب‌ها</span>
        را اضافه کرد تا به یک کتابخانه دیجیتال کامل تبدیل شود.
      </p>
    </section>
  </div>
);

export default About;
