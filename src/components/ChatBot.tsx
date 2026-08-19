'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SendIcon, SparklesIcon, UserIcon, XIcon, ChatIcon } from '@/components/colorful-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const MessageTime = () => {
  const [time] = useState(() =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  return <span className="text-white/30 text-[10px] mt-1">{time}</span>;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const initialMessages: UIMessage[] = [
    {
      id: 'welcome-message',
      role: 'assistant',
      parts: [
        {
          type: 'text',
          text: "👋 Hi! I'm Tawsif's AI assistant. Ask me about his skills, projects, experience, or how to get in touch!",
        },
      ],
    },
  ];
  const { messages, sendMessage, status, error } = useChat({ messages: initialMessages });

  const isLoading = status === 'submitted' || status === 'streaming';
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    if (sendMessage) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const getMessageText = (message: (typeof messages)[number]) =>
    message.parts ?
      message.parts
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('')
      : '';

  // Formatted message renderer
  const renderMessageContent = (text: string, role: string) => {
    if (role === 'user') return <span>{text}</span>;

    return (
      <div className="space-y-0.5">
        {text.split('\n').map((line, i) => {
          // Empty line → small spacer
          if (!line.trim()) return <div key={i} className="h-1" />;

          // Lines with URLs — make them clickable
          if (line.includes('http')) {
            const parts = line.split(/(https?:\/\/\S+)/g);
            return (
              <p key={i} className="text-sm leading-relaxed">
                {parts.map((part, j) =>
                  part.startsWith('http') ? (
                    <a
                      key={j}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors break-all"
                    >
                      {part}
                    </a>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
            );
          }

          // Project header lines (🚀)
          if (line.startsWith('🚀')) {
            return (
              <p key={i} className="text-sm font-semibold text-sky-300 leading-relaxed pt-1">
                {line}
              </p>
            );
          }

          // Bullet points (• or -)
          if (line.trimStart().startsWith('•') || line.trimStart().startsWith('-')) {
            return (
              <p key={i} className="text-sm leading-relaxed pl-2 text-white/80">
                {line}
              </p>
            );
          }

          // Section divider lines (═══)
          if (line.startsWith('═')) {
            return <div key={i} className="h-px bg-sky-400/20 my-1" />;
          }

          // Emoji header lines (📧 💼 🔗 🐙 ✅ ❌)
          if (/^[📧💼🔗🐙✅❌🎓📍]/.test(line)) {
            return (
              <p key={i} className="text-sm leading-relaxed text-white/90">
                {line}
              </p>
            );
          }

          // Default line
          return (
            <p key={i} className="text-sm leading-relaxed text-white/80">
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  const messageVariants: Variants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="group fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/40 focus:outline-none flex items-center justify-center hover:from-sky-400 hover:to-cyan-400"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-sky-400/30" />

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute -top-11 right-0 whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
            Chat with AI
          </span>
        )}

        {isOpen ? (
          <XIcon className="w-6 h-6 relative z-10" />
        ) : (
          <ChatIcon className="w-6 h-6 relative z-10" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 md:right-10 z-50 w-[calc(100vw-2rem)] md:w-[420px] h-[560px] max-h-[calc(100vh-8rem)] rounded-3xl flex flex-col overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-900/30 bg-[#0f1418]/98 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-sky-900/40 to-cyan-900/40 border-b border-sky-400/20 flex items-center gap-3">
              <Avatar className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500">
                <AvatarFallback className="bg-transparent text-white font-bold text-lg">T</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm truncate">Tawsif&apos;s Assistant</h3>
                <Badge className="text-green-400 text-xs bg-transparent p-0 gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  Online • AI Powered
                </Badge>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                aria-label="Close chat"
                className="text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
              >
                <XIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea 
              className="flex-1 min-h-0 p-4" 
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    variants={messageVariants}
                    initial="initial"
                    animate="animate"
                    className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.role === 'assistant' && (
                      <Avatar className="w-6 h-6 flex-shrink-0 bg-gradient-to-br from-sky-500 to-cyan-500">
                        <AvatarFallback className="bg-transparent">
                          <SparklesIcon className="w-3.5 h-3.5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`flex flex-col max-w-[85%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm ${
                          m.role === 'user'
                            ? 'bg-gradient-to-br from-sky-600 to-cyan-600 text-white rounded-br-none'
                            : 'bg-white/5 border border-white/10 text-white/90 rounded-bl-none'
                        }`}
                      >
                        {renderMessageContent(getMessageText(m), m.role)}
                      </div>
                      <MessageTime />
                    </div>
                    {m.role === 'user' && (
                      <Avatar className="w-6 h-6 flex-shrink-0 bg-gradient-to-br from-sky-600 to-cyan-600">
                        <AvatarFallback className="bg-transparent">
                          <UserIcon className="w-3.5 h-3.5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {status === 'submitted' && (
                  <motion.div
                    variants={messageVariants}
                    initial="initial"
                    animate="animate"
                    className="flex items-end gap-2"
                  >
                    <Avatar className="w-6 h-6 flex-shrink-0 bg-gradient-to-br from-sky-500 to-cyan-500">
                      <AvatarFallback className="bg-transparent">
                        <SparklesIcon className="w-3.5 h-3.5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl rounded-bl-none px-4 py-3 bg-white/5 border border-white/10 flex items-center gap-1.5">
                      <motion.div
                        className="w-2 h-2 bg-sky-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-sky-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-sky-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                      />
                      <span className="text-white/40 text-xs ml-1">Thinking...</span>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <div className="flex justify-center">
                    <p className="text-red-400 text-xs bg-red-400/10 px-3 py-1.5 rounded-full border border-red-400/20">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-sky-400/10 bg-black/40">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Tawsif..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-sky-400/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition-colors placeholder:text-white/30 h-auto"
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  variant="ghost"
                  size="icon"
                  aria-label="Send message"
                  className="bg-gradient-to-br from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed w-11 h-11 flex-shrink-0"
                >
                  <SendIcon className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}