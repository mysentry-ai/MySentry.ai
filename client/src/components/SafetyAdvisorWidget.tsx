import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, ChevronDown } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_PROMPTS = [
  "How does the PANIC button work?",
  "Do I need a smartwatch?",
  "How do I set up emergency contacts?",
  "What plan is right for me?",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: "Hi there! I'm the MySentry Assistant. Ask me anything about how MySentry works, which plan is right for you, how to get set up, or anything else about your safety. I'm here to help.",
};

export default function SafetyAdvisorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [showNudge, setShowNudge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const chatMutation = trpc.ai.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev: Message[]) => [
        ...prev,
        { role: "assistant" as const, content: data.content },
      ]);
    },
    onError: () => {
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant" as const,
          content: "Sorry, I had trouble responding. Please try again.",
        },
      ]);
    },
  });

  // Show nudge bubble after 8 seconds if chat is not open
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNudge(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Listen for external open events from ChatbotNudge component
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { message?: string };
      setIsOpen(true);
      setShowNudge(false);
      if (detail?.message) {
        setTimeout(() => {
          handleSend(detail.message!);
        }, 300);
      }
    };
    window.addEventListener("mysentry:chatbot:open", handler);
    return () => window.removeEventListener("mysentry:chatbot:open", handler);
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setShowNudge(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || chatMutation.isPending) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content },
    ];
    setMessages(newMessages);
    setInput("");

    chatMutation.mutate({
      messages: newMessages.filter((m) => m.role !== "assistant" || m !== WELCOME_MESSAGE),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Nudge bubble */}
      <AnimatePresence>
        {showNudge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-5 z-40 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] border border-primary/20 cursor-pointer"
            onClick={() => { setIsOpen(true); setShowNudge(false); }}
          >
            <button
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              onClick={(e) => { e.stopPropagation(); setShowNudge(false); }}
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>
            <p className="text-sm font-medium text-gray-800">Have a question?</p>
            <p className="text-xs text-primary font-semibold mt-1">Ask the MySentry Assistant</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={() => { setIsOpen((v) => !v); setShowNudge(false); }}
        className={cn(
          "fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen ? "bg-gray-800" : "bg-primary"
        )}
        aria-label={isOpen ? "Close MySentry Assistant" : "Open MySentry Assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 z-50 w-[min(380px,calc(100vw-2.5rem))] bg-white rounded-[1.75rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "min(500px, calc(100vh - 8rem))" }}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">MySentry Assistant</p>
              <p className="text-white/70 text-xs">Ask me anything about MySentry</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    )}
                  >
                    {msg.role === "assistant" ? (
                      <Streamdown>{msg.content}</Streamdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {chatMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts (only when just welcome message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {SUGGESTED_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSend(p)}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1.5 hover:bg-primary/20 transition-colors font-medium"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-gray-100 shrink-0">
              <div className="flex items-end gap-2 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200 focus-within:border-primary/50 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about MySentry..."
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 resize-none outline-none max-h-24 leading-relaxed"
                  style={{ minHeight: "24px" }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || chatMutation.isPending}
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white disabled:opacity-40 hover:bg-primary/90 transition-all shrink-0"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
