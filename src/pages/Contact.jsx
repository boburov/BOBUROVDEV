import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const botToken = "7801510543:AAH7b0k0Nvlea0t9Lf5mp81rEtU8wfau_l4"; // Telegram bot tokeningizni qo'ying
  const chatId = "6846125638"; // Telegram chat ID-ni qo'ying

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);

    const text = `📩 Portfoliodan yangi xabar\n\n👤Ism: ${formData.name}\n\n📧Email: ${formData.email}\n\n💬 Xabar: ${formData.message}`;

    try {
      await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        params: {
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        },
      });

      setSuccess("✅ Xabar muvaffaqiyatli yuborildi!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Xabar jo'natishda xatolik:", error);
      setSuccess("❌ Xabar jo'natilmadi. Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container grid grid-cols-2 gap-10 my-10">
      <h1 className="text-4xl font-bold mb-8 col-start-1 col-end-3">Let’s Connect!</h1>
      <div className="py-2">
        <p className="mb-8 text-lg ">
          We’d love to hear from you—whether you have a question, need support,
          or just want to say hello.
        </p>
        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          {/* Call Us Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Call Us:</h2>
            <p className="mb-1">
              Give us a ring at{" "}
              <span className="font-bold">(88) 234-17-37</span> during our
              business hours: Monday to Friday, 9 AM–5 PM.
            </p>
            <p className="text-sm italic">
              (Click the number to call directly from your mobile device.)
            </p>
          </div>

          {/* Email Us Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Us:</h2>
            <p>
              Drop us a line at{" "}
              <a
                href="mailto:boburovshukurullo@gmail.com"
                className="text-[#00009E] underline"
              >
                boburovshukurullo@gmail.com
              </a>
              . We check our inbox daily and promise a quick reply!
            </p>
          </div>

          {/* FAQ CTA */}
          <div>
            <p className="text-sm italic">
              P.S. For frequently asked questions, please check our{" "}
              <span className="cursor-pointer text-[#00009E] underline">
                About Me Page
              </span>{" "}
              first—it might have the answer you’re looking for!
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
      </div>
      <div className="bg-white shadow-lg rounded-md p-8 ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-gray-200 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Emailingiz"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-gray-200 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Xabaringiz"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="resize-none w-full p-4 bg-gray-200 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-[#1c1c1c] text-white font-bold rounded-lg hover:bg-gray-800 transition transform hover:scale-105 duration-300"
            disabled={loading}
          >
            {loading ? "Yuborilmoqda..." : "Xabar Yuborish"}
          </button>
        </form>
        {success && (
          <p className="text-center text-green-600 mt-4">{success}</p>
        )}
      </div>
      +
    </div>
  );
};

export default Contact;
