"use client";

import axios from "axios";
import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const botToken = "7801510543:AAH7b0k0Nvlea0t9Lf5mp81rEtU8wfau_l4";
  const chatId = "6846125638";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      console.error("Xatolik:", error);
      setSuccess("❌ Xabar jo'natilmadi. Iltimos, qaytadan urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8f8f8] py-24 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16 max-md:grid-cols-1">
        {/* LEFT: Info Panel */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#1c1c1c] max-md:text-2xl">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-lg max-md:text-base">
            Whether you have a question, feedback, or collaboration idea — I'm
            just one message away.
          </p>

          <div className="space-y-6 text-gray-800 text-base max-md:text-sm">
            <div>
              <h3 className="font-semibold text-xl mb-1">Call:</h3>
              <p>
                <a
                  href="tel:882341737"
                  className="text-[#00009E] hover:underline"
                >
                  +88 234 17 37
                </a>{" "}
                (Weekdays: 9 AM – 5 PM)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Email:</h3>
              <p>
                <a
                  href="mailto:boburovshukurullo@gmail.com"
                  className="text-[#00009E] hover:underline"
                >
                  boburovshukurullo@gmail.com
                </a>
              </p>
            </div>
            <p className="text-sm italic text-gray-600">
              (You might also find answers on the{" "}
              <span className="underline cursor-pointer text-black">
                About Me
              </span>{" "}
              page.)
            </p>
          </div>
        </div>

        {/* RIGHT: Form Panel */}
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Emailingiz"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Xabaringiz"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 p-4 bg-[#1c1c1c] text-white font-semibold rounded-md hover:bg-black transition hover:scale-[1.02] duration-200"
            >
              <SendHorizonal className="w-5 h-5" />
              {loading ? "Yuborilmoqda..." : "Xabar yuborish"}
            </button>
          </form>

          {success && (
            <p className="text-center mt-4 text-sm text-green-600 font-medium">
              {success}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
