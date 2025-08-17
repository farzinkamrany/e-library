import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("پیام ارسال شد!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">تماس با ما</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* فرم */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4 relative">
            <div className="relative">
              <PersonIcon className="absolute top-3 left-3 text-gray-400 pointer-events-none" />
              <input
                type="text"
                name="name"
                placeholder="نام"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="relative">
              <EmailIcon className="absolute top-3 left-3 text-gray-400 pointer-events-none" />
              <input
                type="email"
                name="email"
                placeholder="ایمیل"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="relative">
              <MessageIcon className="absolute top-3 left-3 text-gray-400 pointer-events-none" />
              <textarea
                name="message"
                placeholder="پیام"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition shadow-lg"
            >
              ارسال پیام
            </button>
          </form>
        </div>

        {/* اطلاعات تماس */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg flex flex-col justify-center gap-4">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">راه‌های ارتباطی</h3>
          <p className="text-gray-600">📍 تهران، ایران</p>
          <p className="text-gray-600">📧 email@example.com</p>
          <p className="text-gray-600">📞 +98 912 345 6789</p>
          <p className="text-gray-600">🌐 وب‌سایت: www.example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
