"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MessageCircle, Clock, Share2 } from "lucide-react";
import Header from "../components/Header";

type UIMessage = {
  id: number;
  update_id: number;
  text: string;
  authorName: string;
  username?: string;
  date: number;
  imageUrl?: string;
  tags: string[];
  readTime: number;
  edited?: boolean;
  forwardedFrom?: string;
};

export default function BlogPage() {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const token = "7595720619:AAHZhscftej0RLr0bE7P59n6POp6JS9eeK8";

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `https://api.telegram.org/bot${token}/getUpdates`
        );
        const results = res.data.result || [];

        const ui: UIMessage[] = [];

        for (const u of results) {
          const m = u.message || u.edited_message || null;
          if (!m) continue;

          // Text yoki caption
          const text: string = m.text || m.caption || "";

          // Rasm yoki document URL
          let imageUrl: string | undefined = undefined;
          try {
            if (m.photo && Array.isArray(m.photo) && m.photo.length > 0) {
              const largest = m.photo[m.photo.length - 1];
              const fileRes = await axios.get(
                `https://api.telegram.org/bot${token}/getFile?file_id=${largest.file_id}`
              );
              const path = fileRes.data?.result?.file_path;
              if (path) {
                imageUrl = `https://api.telegram.org/file/bot${token}/${path}`;
              }
            } else if (m.document) {
              // Document thumb yoki fayl
              const fileRes = await axios.get(
                `https://api.telegram.org/bot${token}/getFile?file_id=${m.document.file_id}`
              );
              const path = fileRes.data?.result?.file_path;
              if (path) {
                imageUrl = `https://api.telegram.org/file/bot${token}/${path}`;
              }
            } else {
              // Tekstdan URL topish
              const urlMatch = text.match(
                /(https?:\/\/(?:(?!\s).)+\.(?:png|jpg|jpeg|gif|webp))/i
              );
              if (urlMatch) imageUrl = urlMatch[1];
            }
          } catch {
            imageUrl = undefined;
          }

          // Taglarni topish
          const tags = (text.match(/#\w+/g) || []).map((t: string) =>
            t.replace("#", "")
          );

          // O‘qish vaqti (200ta so‘z = 1 min)
          const words = text.split(/\s+/).filter(Boolean).length;
          const readTime = Math.max(1, Math.ceil(words / 200));

          // Forward qilingan postlar
          let forwardedFrom: string | undefined = undefined;
          if (m.forward_origin?.chat?.title) {
            forwardedFrom = m.forward_origin.chat.title;
          } else if (m.forward_from_chat?.title) {
            forwardedFrom = m.forward_from_chat.title;
          }

          ui.push({
            update_id: u.update_id,
            id: m.message_id,
            text,
            authorName: m.from?.first_name || m.chat?.first_name || "Anonim",
            username: m.from?.username || m.chat?.username,
            date: m.edit_date || m.date || Math.floor(Date.now() / 1000),
            imageUrl,
            tags,
            readTime,
            edited: !!m.edit_date,
            forwardedFrom,
          });
        }

        // Duplicate’larni olib tashlash
        setMessages((prev) => {
          const map = new Map<number, UIMessage>();
          [...prev, ...ui].forEach((msg) => {
            map.set(msg.id, msg); // message_id bo‘yicha overwrite
          });
          const arr = Array.from(map.values());
          arr.sort((a, b) => b.date - a.date);
          return arr;
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1d] to-[#2b2b30] text-white p-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          {`Boburov's Blog`}
        </h1>

        <div className="container space-y-10">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-[#232327] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              {/* Media */}
              {msg.imageUrl && (
                <img
                  src={msg.imageUrl}
                  alt="telegram attachment"
                  className="rounded-xl mb-4 w-full max-h-[400px] object-cover"
                />
              )}

              {/* Text */}
              <p className="text-2xl font-medium leading-relaxed mb-6 text-gray-100">
                {msg.text || "📎 Media/Message mavjud emas"}
              </p>

              {/* Tags */}
              {msg.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {msg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Pastki info */}
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="text-blue-400" />
                    <h2 className="font-semibold text-sm">
                      {msg.authorName}{" "}
                      {msg.username && (
                        <span className="text-xs text-gray-400">
                          @{msg.username}
                        </span>
                      )}
                    </h2>
                  </div>

                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    {new Date(msg.date * 1000).toLocaleString()}
                    {msg.edited && (
                      <span className="ml-2 text-yellow-400">✏️ Edited</span>
                    )}
                    {msg.forwardedFrom && (
                      <span className="flex items-center gap-1 text-green-400">
                        <Share2 size={12} /> From {msg.forwardedFrom}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock size={14} />
                  {msg.readTime} min read
                </div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <p className="text-center text-gray-400">Hali xabarlar yo‘q...</p>
          )}
        </div>
      </div>
    </>
  );
}
