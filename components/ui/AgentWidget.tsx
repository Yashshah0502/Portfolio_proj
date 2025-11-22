"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User } from "lucide-react";

const predefinedQA = [
  {
    question: "What's your best AI project?",
    answer: "My 'Coffee Shop AI Agent' is a standout. It handles real-time orders and queries using RAG + LLaMA 3.1, reducing wait times by 40%. It's a full-stack solution with a FastAPI backend and React frontend."
  },
  {
    question: "Do you know Microsoft Fabric?",
    answer: "Yes! I built a 'Fabric AI Data Assistant' that automates data pipelines. It uses Azure OpenAI to translate natural language into SQL, allowing non-tech users to query data warehouses directly."
  },
  {
    question: "What about embeddings?",
    answer: "I use embeddings extensively for RAG systems. I typically use OpenAI's text-embedding-3-small or open-source models like BGE-M3, stored in vector DBs like Pinecone or Qdrant for semantic search."
  }
];

export default function AgentWidget() {
  const [messages, setMessages] = useState<{ role: "user" | "agent"; text: string }[]>([
    { role: "agent", text: "Hi! I'm Yash's Portfolio Agent. Ask me anything about his work." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = (qa: typeof predefinedQA[0]) => {
    setMessages((prev) => [...prev, { role: "user", text: qa.question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "agent", text: qa.answer }]);
    }, 1500);
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden flex flex-col h-[500px]">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-zinc-950 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">Portfolio Agent</h3>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Online
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/20">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "agent" ? "bg-blue-600" : "bg-zinc-700"
              }`}
            >
              {msg.role === "agent" ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div
              className={`p-3 rounded-lg text-sm max-w-[80%] ${
                msg.role === "agent"
                  ? "bg-zinc-800 text-gray-200"
                  : "bg-blue-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-zinc-800 p-3 rounded-lg flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Preset Buttons) */}
      <div className="p-4 border-t border-white/10 bg-zinc-900">
        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Ask about:</p>
        <div className="flex flex-wrap gap-2">
          {predefinedQA.map((qa, i) => (
            <button
              key={i}
              onClick={() => handleAsk(qa)}
              disabled={isTyping}
              className="text-xs px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-white/5 rounded-full text-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
            >
              {qa.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
