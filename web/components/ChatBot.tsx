"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ChatAction {
  type: "link" | "external";
  label: string;
  url: string;
}

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
  action?: ChatAction;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Merhaba! 👋 VeloraDX hakkında sorularınız var mı? Size yardımcı olmaktan mutlu olacağız.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5098/api/chat/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: data.answer,
        timestamp: new Date(),
        action: data.action,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Üzgünüm, bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl hover:shadow-cyan-500/50 border-2 border-cyan-300/30 group"
        title="Chatbot"
      >
        <span className="group-hover:scale-125 transition-transform duration-300">🤖</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-slate-950 border border-cyan-500/30 rounded-xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-b border-cyan-500/30 px-4 py-3 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <div>
            <h3 className="font-bold text-cyan-400">VeloraDX Asistan</h3>
            <p className="text-xs text-slate-400">Çevrimiçi - Her zaman yardımcı</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-slate-400 hover:text-slate-200 transition-colors text-xl"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs ${msg.type === "user" ? "" : "w-full"}`}>
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-br-none"
                    : "bg-slate-800 text-slate-300 border border-cyan-500/30 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
              {msg.action && (
                <div className="mt-3 flex gap-2">
                  {msg.action.type === "link" ? (
                    <a
                      href={msg.action.url}
                      className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {msg.action.label}
                    </a>
                  ) : (
                    <a
                      href={msg.action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">↗</span>
                      {msg.action.label}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-400 px-4 py-2 rounded-lg border border-cyan-500/30 rounded-bl-none">
              <span className="animate-pulse">Yazıyor...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-cyan-500/30 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Soru sorun..."
          className="flex-1 bg-slate-800 text-slate-100 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          disabled={loading}
        />
        <Button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold px-3 disabled:opacity-50"
        >
          ↑
        </Button>
      </div>

      {/* Footer */}
      <div className="border-t border-cyan-500/20 px-4 py-2 text-xs text-slate-500 text-center bg-slate-900/50 rounded-b-xl">
        AI asistanı tarafından desteklenmektedir
      </div>
    </div>
  );
}
