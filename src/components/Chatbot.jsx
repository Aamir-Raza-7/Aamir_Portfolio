import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am a virtual assistant for Aamir. You can ask me questions about his skills, projects, or experience.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    try {
      const systemPrompt = `
You are a virtual assistant for Aamir Raza's portfolio. You MUST ONLY answer questions using the following resume data. 
If the user asks a question that cannot be answered using this resume data, you MUST reply exactly with: "Sorry, I am unable to answer. I am integrated for this portfolio only." Do NOT try to be conversational about outside topics.

--- RESUME DATA ---
Name: Aamir Raza
Role: Full Stack Developer · MERN · React · Node.js · AWS
Email: workwithamir711@gmail.com
Phone: +91 9828128289
Location: Udaipur, Rajasthan
GitHub: www.github.com/Aamir-Raza-7
LinkedIn: www.linkedin.com/in/amir-raza-36ab74413

Profile: Full Stack Developer with MERN stack expertise and hands-on experience building production-grade web apps — from real-time dashboards and task management platforms to cloud storage systems on AWS. Trained in AI/ML and Linux/Docker. B.Tech CSE, Geetanjali Institute (2023–27).

TECHNICAL SKILLS:
- Frontend: React.js, HTML5, CSS3, Tailwind CSS, Chart.js, WebSocket, Responsive UI
- Backend: Node.js, Express.js, REST APIs, JWT Auth, bcrypt
- Databases: MongoDB, MySQL, SQLite
- Cloud / DevOps: AWS (EC2, S3), Docker, Linux (Ubuntu), Git
- Languages: JavaScript (ES6+), Python, SQL, PHP

WORK EXPERIENCE:
1. AI / ML & Full Stack Development Training · Grras Solutions, Jaipur (Jul – Aug 2025)
   - Completed intensive dual-track training covering supervised/unsupervised ML concepts, Python-based ML tooling, and introductory neural networks alongside full-stack web development.
   - Mastered the full web development lifecycle — React frontend, Node.js/Express backend, REST API design, and MySQL/MongoDB integration.

2. Technical Intern (Linux · AWS · Docker) · Datayama Enterprise LLP (Virtual) (Jul – Oct 2025)
   - Gained working proficiency in Linux system administration, AWS core services (EC2, S3, IAM), and Docker containerisation.

PROJECTS:
1. Cloud Storage System: React · Node.js · SQLite · AWS EC2 + S3. Google Drive-style platform with per-user access control, secure file upload/download, and folder management.
2. Task Management App: React · Node.js · Express. Role-based task app with real-time CRUD, animated modals, optimistic UI updates.
3. Bank Management System: MERN Stack. Secure banking portal with JWT auth, bcrypt password hashing, deposit/withdrawal, and real-time balance updates.
4. Network Monitoring Dashboard: MERN · WebSocket · Chart.js. Real-time server uptime and latency monitor.
5. La' Chrome — Design Website: WordPress · CSS. Minimalist architecture and interior design portfolio site.
6. Dairy Parlour - –	Built a full-stack Dairy Management System with online ordering, subscriptions, and admin management using PHP and MySQL

EDUCATION & CERTIFICATIONS:
- B.Tech — Computer Science & Engineering, Geetanjali Institute of Technical Studies, Udaipur (2023–2027)
- Blockchain Technology Fundamentals (Mar 2025)
- Ethical Hacking Foundations (Aug 2023)
-------------------

Academic Performance: 
- 10th Grade: 85.0%
- 12th Grade: 61.8% (Science Stream)
- B.Tech CSE: 9 CGPA (Ongoing)

User Question: ${userMessage}
`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Aamir Portfolio Chatbot"
        },
        body: JSON.stringify({
          model: "openrouter/free", 
          messages: [
            { role: "user", content: systemPrompt }
          ]
        })
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      const text = data.choices[0].message.content;
      setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error while trying to process your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-emerald-deep dark:bg-gold-dark text-cream dark:text-forest shadow-2xl hover:scale-110 transition-transform duration-300 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open Chatbot"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-cream dark:bg-forest border border-charcoal/10 dark:border-white/10 shadow-2xl flex flex-col z-50 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-charcoal/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-deep dark:bg-gold-dark text-cream dark:text-forest rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-charcoal dark:text-cream-soft">Aamir's Assistant</h3>
              <p className="text-xs text-charcoal/60 dark:text-cream-soft/60 font-medium">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-charcoal/60 hover:text-charcoal dark:text-cream-soft/60 dark:hover:text-cream-soft transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-charcoal dark:bg-cream-soft text-cream dark:text-forest rounded-l-xl rounded-tr-xl' 
                    : 'bg-black/5 dark:bg-white/5 text-charcoal dark:text-cream-soft rounded-r-xl rounded-tl-xl border border-charcoal/5 dark:border-white/5'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="p-3 bg-black/5 dark:bg-white/5 text-charcoal dark:text-cream-soft rounded-r-xl rounded-tl-xl flex items-center">
                <Loader2 size={16} className="animate-spin text-emerald-deep dark:text-gold-dark" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-charcoal/10 dark:border-white/10 bg-cream dark:bg-forest">
          <form onSubmit={handleSend} className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my skills..."
              className="flex-1 bg-black/5 dark:bg-white/5 text-charcoal dark:text-cream-soft px-4 py-2 text-sm font-medium placeholder-charcoal/40 dark:placeholder-cream-soft/40 border border-transparent focus:border-emerald-deep/50 dark:focus:border-gold-dark/50 focus:outline-none transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2 bg-emerald-deep dark:bg-gold-dark text-cream dark:text-forest hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
