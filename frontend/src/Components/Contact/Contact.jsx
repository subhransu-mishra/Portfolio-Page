import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: "New Contact Message",
        message: formData.message,
      };

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setFormStatus({ type: "", message: "" });
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#050505] min-h-screen flex items-center justify-center py-24 relative overflow-hidden" id="contact_section">
      {/* Abstract Background Texture */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(circle at 40% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          filter: 'url(#noise)'
        }}
      ></div>
      
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
      </svg>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ filter: 'url(#noise)' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-wide">
                LET'S CREATE SOMETHING<br />MEANINGFUL
              </h2>
              <p className="mt-8 text-[#ccff00] font-semibold text-sm md:text-base tracking-wide flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
                <span>work.subhransu@gmail.com</span> 
                <span className="hidden md:inline mx-4 text-gray-500 font-normal">//</span> 
                <span>+91 7008207704</span>
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex items-center gap-4 mb-3 relative z-10">
                 <span className="text-gray-600 font-bold text-lg tracking-wider">SM</span>
                 <h3 className="text-white font-bold text-lg tracking-widest uppercase">SUBHRANSU MISHRA</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm font-medium mb-8 relative z-10 tracking-wide">
                Full-Stack Developer | MERN | Cloud & AI
              </p>
              
              <div className="flex gap-4 relative z-10">
                 <a href="https://github.com/subhransu-mishra" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer group">
                   <Github className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                 </a>
                 <a href="https://www.linkedin.com/in/subhransu-sekhar-mishra/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer group">
                   <Linkedin className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                 </a>
                 <a href="mailto:work.subhransu@gmail.com" className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer group">
                   <Mail className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-lg lg:ml-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-md px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-md px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows="6"
                  className="w-full bg-transparent border border-white/10 rounded-md px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-sm py-4 rounded-md transition-colors uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Sending..." : "submit message"}
              </button>
              
              {formStatus.message && (
                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   className={`mt-4 text-sm font-medium text-center ${formStatus.type === 'success' ? 'text-[#ccff00]' : 'text-red-500'}`}
                 >
                   {formStatus.message}
                 </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
