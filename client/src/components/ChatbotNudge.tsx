import { motion } from "framer-motion";
import { MessageCircle, ChevronRight } from "lucide-react";

const questions = [
  "How does fall detection actually work?",
  "What happens when I press the PANIC button?",
  "Do I need a smartwatch to use MySentry?",
  "How do I set up my emergency contacts?",
  "What is the difference between the Individual and Family plans?",
];

export default function ChatbotNudge() {
  const handleQuestionClick = (question: string) => {
    // Dispatch a custom event that the chatbot widget can listen to
    window.dispatchEvent(new CustomEvent("mysentry:chatbot:open", { detail: { message: question } }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#e8f5e9] rounded-[2.5rem] p-10 md:p-14 text-center border border-primary/20"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4">
            Have Questions? Ask Our Safety Advisor
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Our AI-powered safety advisor is available 24/7 to answer any question about MySentry, how it works, which plan is right for you, and how to get set up in minutes.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {questions.map((q) => (
              <button
                key={q}
                onClick={() => handleQuestionClick(q)}
                className="flex items-center gap-2 bg-white border border-primary/30 text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 shadow-sm"
              >
                <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                {q}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleQuestionClick("")}
            className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-14 text-base transition-all hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Our Safety Advisor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
